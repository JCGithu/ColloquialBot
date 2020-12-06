const Discord = require('discord.js');
const client = new Discord.Client({
  partials: ['MESSAGE']
});
require('dotenv').config();

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

function addRole(member, role){
  member.roles.add(role);
}

client.login(process.env.BOT_TOKEN);

