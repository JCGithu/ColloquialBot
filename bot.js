const fs = require('fs');
const path = require('path');
const Discord = require('discord.js');
const client = new Discord.Client({
  partials: ['MESSAGE', 'CHANNEL', 'REACTION']
});
require('dotenv').config();

const roles = {
  "Among Us": {
    "emoji": "🔪",
    "id": '785120209752293387'
  },
  "Age of Mythology":{
    "emoji": "🔱",
    "id": "784799109990842398",
    "server": personal
  },
  "Codenames":{
    "emoji": "🕵️‍♂️",
    "id": "785154460929753089"
  },
  "D&D":{
    "emoji":"🐉",
    "id": "785155885583433728"
  },
  "Jackbox Games":{
    "emoji": "📦",
    "id": "785155943213301761"
  },
  "FIFA":{
    "emoji": "⚽",
    "id": "785993682197151786"
  }
}

client.on('ready', ()=>{
  console.log('ColloquialBot ready');
});

client.on("guildMemberAdd", (user) => {
  if (user.guild == twitch){
    user.roles.add('772498414553792522');
  }
});

client.on('message', msg =>{
  if (msg.content == 'hello bot!'){
    msg.channel.send('Hi yourself ;)');
  }
})

client.on('messageReactionAdd', async (reaction, user) => {
  roleChange(reaction, user, true);
})

client.on('messageReactionRemove', async (reaction, user) => {
  roleChange(reaction, user, false);
})

async function roleChange(reaction, user, add){
  if (reaction.message.partial) await reaction.message.fetch();
  if (reaction.partial) await reaction.fetch();

  if (user.bot) return;
  if (reaction.message.id == '785132049463115798'){
    for (role in roles){
      roleInfo = roles[role];
      if (reaction.emoji.name === roleInfo.emoji){
        if (add == true){
          await reaction.message.guild.members.cache.get(user.id).roles.add(roleInfo.id);
          console.log(user.username + ' added the role ' + role + roleInfo.emoji)
        } else {
          await reaction.message.guild.members.cache.get(user.id).roles.remove(roleInfo.id);
          console.log(user.username + ' removed the role ' + role + roleInfo.emoji)
        }
      }
    }
  }
}

client.login(process.env.BOT_TOKEN);

