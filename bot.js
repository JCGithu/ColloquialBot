const Discord = require('discord.js');
const client = new Discord.Client({
  partials: ['MESSAGE', 'CHANNEL', 'REACTION']
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

client.on('messageReactionAdd', async (reaction, user) => {
  if (reaction.message.partial) await reaction.message.fetch();
  if (reaction.partial) await reaction.fetch();

  if (user.bot) return;
  if (reaction.message.id == '785132049463115798'){
    if (reaction.emoji.name === '🔪'){
      await reaction.message.guild.members.cache.get(user.id).roles.add('785120209752293387');
    }
  }
})

function addRole(member, role){
  member.roles.add(role);
}

client.login(process.env.BOT_TOKEN);

