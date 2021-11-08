require('dotenv').config();
const fs = require('fs');
const path = require('path');
const Discord = require('discord.js');
const client = new Discord.Client({
  partials: ['MESSAGE', 'CHANNEL', 'REACTION'],
});
const tmi = require('tmi.js');

const newRandomMessage = require('./tools/randomMessage');
const getRandomInt = require('./tools/getRandomInt.js');
const getDirectories = require('./tools/getDirectories');

//Data Files
const roles = require('./data/roles.json');
//const basicTwitch = require('./twitch/colloquialowl/basic.json');
//const listTwitch = require('./twitch/colloquialowl/lists.json');

const listDiscord = require('./discord/colloquialowl/lists.json');

const twitchChannels = ['colloquialowl']; 
let repeatList = {}, loop = 1
for (let tCh in twitchChannels){
  repeatList[twitchChannels[tCh]] = '';
}

let commands = {};
for (let chan of twitchChannels){
  commands[chan] = [];
  let dir = `./twitch/${chan}`
  let files = fs.readdirSync(dir);
  for (const file of files) {
    commands[chan].push(path.parse(file).name);
  }
}

client.on('ready', () => {
  console.log('Discord bot is ready! ✅');

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

  twitch.on('message', (channel, tags, message, self) => {
    if(self) return;
    let channelName = channel.substring(1);
    let channelCommands = commands[channelName]
    if (message.charAt(0) === '!'){
      let command = message.substring(1).toLowerCase().split(' ')[0];
      for (let cc in channelCommands){
        if (command === channelCommands[cc]) {
          var codeToRun = require(`./twitch/${channelName}/${command}`);
          twitch.say(channel, codeToRun(channel, tags, message, client));
          return;
        };
      }
    }
    if (repeatList[channel] === message){
      loop = ++loop;
      repeatList[channel] = message;
    } else {
      if (loop > 2) twitch.say(channel, `/me ${loop} message streak!`);
      loop = 1;
      repeatList[channel] = message;
    }
  });
});

client.on('guildMemberAdd', (user) => {
  if (user.guild == twitch) user.roles.add('772498414553792522');
});

client.on('message', (msg) => {
  if (msg.content.charAt(0) === '!'){
    let command = msg.content.substring(1).toLowerCase().split(' ')[0];
    for (let list in listDiscord){
      if (command === list) msg.channel.send(listDiscord[list][getRandomInt(listTwitch[list].length)]);
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
        } else {
          await reaction.message.guild.members.cache.get(user.id).roles.remove(roleInfo.id);
          console.log(`${user.username} removed the role ${role} ${roleInfo.emoji}`);
        }
      }
    }
  }
}

client.login(process.env.BOT_TOKEN);
