require('dotenv').config();
const fs = require('fs');
const path = require('path');
const Discord = require('discord.js');
const client = new Discord.Client({
  partials: ['MESSAGE', 'CHANNEL', 'REACTION'],
});
const tmi = require('tmi.js');
const ComfyDB = require( "comfydb" );
const ytdl = require( "ytdl-core" );

//DB
const DBURI = `mongodb+srv://colloquialbot:${process.env.DBPASS}@colloquialbot.dqesd.mongodb.net/User_Data?retryWrites=true&w=majority`

//Tools
const getTwitchData = require('./tools/getTwitchData.js');
const getDiscordData = require('./tools/getDiscordData.js');
const chatStreak = require('./tools/chatStreak');
const roleChange = require('./tools/roleChange.js');
const defaultRole = require('./tools/defaultRole');
let chatQueue = require('./tools/queue');

//Data
const twitchChannels = ['colloquialowl']; 
const twitchData = getTwitchData(fs, path, twitchChannels);
const discordData = getDiscordData(fs, path);



//Function Start
client.on('ready', async() => {
  console.log('Discord bot is ready! ✅');

  await ComfyDB.Connect( { url: DBURI, dbname: "ComfyDB" } );
  let dbRunning = ComfyDB.IsConnected();
  if (dbRunning === true) console.log('Database is ready! ✅');

  const twitch = new tmi.Client({
    options: { debug: false, messagesLogLevel: "info" },
    connection: {
      reconnect: true,
      secure: true
    },
    identity: {
      username: process.env.TWITCHUSER,
      password: process.env.OAUTH,
    },
    channels: twitchChannels
  });

  twitch.connect().catch(console.error);
  twitch.on("connected", () => {console.log('Twitch bot is ready! ✅')});

  twitch.on('message', async (channel, tags, message, self) => {
    if (self) return;
    let channelName = channel.substring(1);
    let channelCommands = twitchData[channelName].commands;
    let command = message.substring(1).toLowerCase().split(' ')[0];

    //COMMANDS
    if (message.charAt(0) === '!'){
      for (let cc in channelCommands){
        if (command !== channelCommands[cc]) continue;
        let codeToRun = require(`./twitch/${channelName}/${command}`);
        console.log(`!${command} run by ${tags.username}`);
        chatQueue.push(codeToRun(channel, tags, message, client), function(output) {
          twitch.say(channel,output)
        });
        return;
      }
    }

    //POINTS
    if (message.charAt(0) === '+'){
      for (let p in twitchData.points){
        if (command != p) continue;
        let codeToRun = require(twitchData.points[p].path);
        console.log(`!${command} run by ${tags.username}`);     
        chatQueue.push(codeToRun(channel, tags, message, client, ComfyDB), function(output) {
          twitch.say(channel,output)
        });
        return;
      }
    }

    //REDEEMS
    if (tags['custom-reward-id']){
      for (let r in twitchData.redeems){
        if (tags['custom-reward-id'] !== twitchData.redeems[r].reward) continue;
        let codeToRun = require(twitchData.redeems[r].path);
        console.log(`!${twitchData.redeems[r].name} run by ${tags.username}`);  
        chatQueue.push(codeToRun(channel, tags, message, client, ComfyDB), function(output) {
          twitch.say(channel,output)
        });
        return;
      }
    }
  
    chatStreak(twitchData, twitch, channel, channelName, message);
  });
});

//DISCORD
client.on('guildMemberAdd', (user) => {
  defaultRole(user, discordData);
  twitch.say('#colloquialowl', `${user.username} joined the Discord! Hi!`);
});

const musicQueue = new Map();

let currentStreak = 0;
let lastSteak = '';

client.on('message', async (msg) => {
  
  if (msg.author.bot) return;

  if (msg.channel.id === "988143497037090836"){
    let steakCheck = await ComfyDB.Get('steak');
    currentStreak = steakCheck.current;
    if (msg.content === 'steak'){
      if (lastSteak === msg.member.user.username){
        msg.channel.send(`_No! You cannot steak twice! Bad._`);
        return;
      }
      msg.react('🥩');
      lastSteak = msg.member.user.username;
      await ComfyDB.Increment( "current", { by: 1, where: { username: { equals: 'steak ' } } } );
    } else if (currentStreak > 1) {
      if (steakCheck.highscore < currentStreak) {
        await ComfyDB.Store('steak', { highscore: currentStreak, current: 0});
        msg.channel.send(`_You stacked ${currentStreak} steaks! A new record! ...but ${msg.member.user.username} broke it_`);
      } else {
        await ComfyDB.Store('steak', { current: 0 });
        msg.channel.send(`_You stacked ${currentStreak} steaks! ...but ${msg.member.user.username} broke it_`);
      }
      currentStreak = 0;
    }
  }

  if (msg.content.charAt(0) != '!') return;
  let command = msg.content.substring(1).toLowerCase().split(' ')[0];
  for (let server in discordData){
    if (discordData[server].id != msg.guild.id) continue;
    for (let i in discordData[server].commands){
      let commandName = discordData[server].commands[i];
      if (command != commandName) continue;
      let codeToRun = require(`./discord/${server}/commands/${commandName}`);
      chatQueue.push(codeToRun(msg.content, msg, ComfyDB), function(output) {
        msg.channel.send(output);
      });
    }
  }
});

client.on('messageReactionAdd', async (reaction, user) => {
  roleChange(reaction, user, true, client, discordData);
});

client.on('messageReactionRemove', async (reaction, user) => {
  roleChange(reaction, user, false, client, discordData);
});

client.login(process.env.BOT_TOKEN);
