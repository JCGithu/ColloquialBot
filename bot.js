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
    "id": "784799109990842398"
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
  }

}

client.on('ready', ()=>{
  console.log('ColloquialBot ready');
});

client.on('message', msg =>{
  if (msg.content == 'hello bot!'){
    msg.channel.send('Hi yourself ;)');
  }
  if (msg.content == '+add among us'){
    addRole(msg.member,'785120209752293387');
  }
})

client.on('messageReactionAdd', async (reaction, user) => {
  if (reaction.message.partial) await reaction.message.fetch();
  if (reaction.partial) await reaction.fetch();

  if (user.bot) return;
  if (reaction.message.id == '785132049463115798'){
    for (role in roles){
      roleInfo = roles[role];
      if (reaction.emoji.name === roleInfo.emoji){
        console.log(user.username + ' ' + role + ' removed')
        await reaction.message.guild.members.cache.get(user.id).roles.add(roleInfo.id);
      }
    }
  }
})

client.on('messageReactionRemove', async (reaction, user) => {
  if (reaction.message.partial) await reaction.message.fetch();
  if (reaction.partial) await reaction.fetch();

  if (user.bot) return;
  if (reaction.message.id == '785132049463115798'){
    for (role in roles){
      roleInfo = roles[role];
      if (reaction.emoji.name === roleInfo.emoji){
        console.log(user.username + ' ' + role + ' removed')
        await reaction.message.guild.members.cache.get(user.id).roles.remove(roleInfo.id);
      }
    }
  }
})

function addRole(member, role){
  member.roles.add(role);
}

client.login(process.env.BOT_TOKEN);

