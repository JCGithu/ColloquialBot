require('dotenv').config();
const fs = require('fs');
const path = require('path');
const Discord = require('discord.js');
const client = new Discord.Client({
  partials: ['MESSAGE', 'CHANNEL', 'REACTION'],
});
const tmi = require('tmi.js');
const ComfyDB = require( "comfydb" );

//DB
const DBURI = `mongodb+srv://colloquialbot:${process.env.DBPASS}@colloquialbot.dqesd.mongodb.net/User_Data?retryWrites=true&w=majority`

const getRandomInt = require('./tools/getRandomInt.js');
const getTwitchData = require('./tools/getTwitchData.js');
const getDiscordData = require('./tools/getDiscordData.js');
const chatStreak = require('./tools/chatStreak');

//Data Files
const roles = require('./data/roles.json');
const twitchChannels = ['colloquialowl']; 

//Pull Data
const twitchData = getTwitchData(fs, path, twitchChannels);
const discordData = getDiscordData(fs, path);

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
    if(self) return;
    let channelName = channel.substring(1);
    let channelCommands = twitchData[channelName].commands;
    let command = message.substring(1).toLowerCase().split(' ')[0];

    //COMMANDS
    if (message.charAt(0) === '!'){
      for (let cc in channelCommands){
        if (command === channelCommands[cc]) {
          var codeToRun = require(`./twitch/${channelName}/${command}`);
          twitch.say(channel, codeToRun(channel, tags, message, client));
          return;
        };
      }
    }

    //POINTS
    if (message.charAt(0) === '+' || tags['custom-reward-id']){
      for (let p in twitchData.points){
        var codeToRun = require(twitchData.points[p].path);
        if (command === p) {
          let toPrint = await codeToRun(channel, tags, message, client, ComfyDB)
          twitch.say(channel, toPrint);
          return;
        };
        if (!tags['custom-reward-id']) continue;
        if(tags['custom-reward-id'] === twitchData.points[p].reward){
          let toPrint = await codeToRun(channel, tags, message, client, ComfyDB)
          twitch.say(channel, toPrint);
          return;
        }
      }
    }
    
    if (tags['custom-reward-id'] === 'a6280385-8c67-4448-b4ac-83cf956f7a07'){
      var codeToRun = require(`./twitch/points/plus.js}`);
      twitch.say(channel, codeToRun())
    }
    chatStreak(twitchData, twitch, channel, channelName, message);
  });
});

client.on('guildMemberAdd', (user) => {
  if (user.guild == twitch) user.roles.add('772498414553792522');
});

client.on('message', async (msg) => {
  if (msg.content.charAt(0) === '!'){
    let command = msg.content.substring(1).toLowerCase().split(' ')[0];
    for (let server in discordData){
      if (discordData[server].id === msg.guild.id){
        for (let i in discordData[server].commands){
          let commandName = discordData[server].commands[i];
          let codeToRun = require(`./discord/${server}/${commandName}`);
          let running = await codeToRun(msg.content, ComfyDB)
          if (command === commandName) msg.channel.send(running);
        }
      }
    }
  }
});

client.on('messageReactionAdd', async (reaction, user) => {
  roleChange(reaction, user, true);
});

client.on('messageReactionRemove', async (reaction, user) => {
  roleChange(reaction, user, false);
});

async function roleChange(reaction, user, add) {
  if (reaction.message.partial) await reaction.message.fetch();
  if (reaction.partial) await reaction.fetch();
  if (user.bot) return;

  if (reaction.message.id === '785132049463115798' || reaction.message.id === '786549352809758730') {
    for (role in roles) {
      roleInfo = roles[role];
      if (reaction.emoji.name === roleInfo.emoji) {
        if (add) {
          await reaction.message.guild.members.cache.get(user.id).roles.add(roleInfo.id);
          console.log(`${user.username} added the role ${role} ${roleInfo.emoji}`);
          return;
        }
        await reaction.message.guild.members.cache.get(user.id).roles.remove(roleInfo.id);
        console.log(`${user.username} removed the role ${role} ${roleInfo.emoji}`);
        return;
      }
    }
  }
}

client.login(process.env.BOT_TOKEN);
