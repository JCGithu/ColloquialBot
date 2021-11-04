require('dotenv').config();
const fs = require('fs');
const path = require('path');
const Discord = require('discord.js');
const client = new Discord.Client({
  partials: ['MESSAGE', 'CHANNEL', 'REACTION'],
});
const ComfyJS = require('comfy.js');

//Data Files
const roles = require('./data/roles.json');
const liveMessages = require('./data/liveMessages.json');
const cheezoid = require('./data/cheezoid.json');
const hello = require('./data/hello.json');
const basicTwitch = require('./data/basicTwitch.json');

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function newRandomMessage(targetFile) {
  return targetFile[getRandomInt(targetFile.length - 1)];
}

const twitchChannels = ['ColloquialOwl']; 
let repeatList = {}, loop = 1;
for (let tCh in twitchChannels){
  repeatList[twitchChannels[tCh]] = '';
}

//ComfyJS.Init('ColloquialOwl');
ComfyJS.Init(process.env.TWITCHUSER, process.env.OAUTH, twitchChannels );

client.on('ready', () => {
  console.log('Discord bot is ready! ✅');
  ComfyJS.onCommand = (user, command, message, flags, extra) => {
    if (flags.broadcaster && command === 'notify') {
      client.channels.cache
        .get(`772497072653336586`)
        .send(`<@&786544562193432628> ${newRandomMessage(liveMessages)} https://twitch.tv/colloquialowl`);
    }
    for (let basic in basicTwitch){
      let newBasic = basic.substring(1);
      if (command === newBasic){
        ComfyJS.Say(basicTwitch[basic]);
      }
    }
    if (command === 'cheezoid'){
      ComfyJS.Say(newRandomMessage(cheezoid));
    }
  };
  ComfyJS.onChat = ( user, message, flags, self, extra ) => {
    if (repeatList[extra.channel] === message){
      loop = ++loop;
    } else {
      if (loop > 2){
        ComfyJS.Say(`That was a streak of ${loop} messages! Nice!`);
      }
      loop = 1;
    }
    repeatList[extra.channel] = message;
  }
});

client.on('guildMemberAdd', (user) => {
  if (user.guild == twitch) user.roles.add('772498414553792522');
});

client.on('message', (msg) => {
  if (msg.content === 'hello!') msg.channel.send(newRandomMessage(hello));
  if (msg.content === '!cheezoid') msg.channel.send(newRandomMessage(cheezoid));
});

client.on('messageReactionAdd', async (reaction, user) => {
  roleChange(reaction, user, true);
});

client.on('messageReactionRemove', async (reaction, user) => {
  roleChange(reaction, user, false);
});

client.on('guildMemberAdd', (member) => {
  console.log('User' + member.user.tag + 'has joined the server!');
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
