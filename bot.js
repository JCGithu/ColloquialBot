const fs = require('fs');
const path = require('path');
const Discord = require('discord.js');
const client = new Discord.Client({
  partials: ['MESSAGE', 'CHANNEL', 'REACTION'],
});
require('dotenv').config();

let roles = fs.readFile(path.resolve(__dirname, './data/roles.json'), async (err, data) => {
  return JSON.parse(data);
});

client.on('ready', () => {
  console.log('Discord bot is ready! ✅');
});

client.on('guildMemberAdd', (user) => {
  if (user.guild == twitch) user.roles.add('772498414553792522');
});

client.on('message', (msg) => {
  if (msg.content === 'hello bot!') msg.channel.send('Hi yourself ;)');
  if (msg.content === '!cheezoid') {
    let deathName = Math.floor(Math.random() * 10);
    if (deathName === 3) {
      msg.channel.send('CHEEZOID ONLY KNOWS PAIN 😟');
      return;
    }
    let random_boolean = Math.random() < 0.5;
    if (random_boolean) {
      msg.channel.send('CHEESE 🧀');
      return;
    }
    msg.channel.send('PETRIL ⛽');
    return;
  }
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
        if (add === true) {
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
