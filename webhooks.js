const Discord = require('discord.js');
const client = new Discord.Client({
  partials: ['MESSAGE', 'CHANNEL', 'REACTION'],
});
require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const app = express().use(bodyParser.json());
app.listen(process.env.PORT || 500, () => console.log('Webhook is listening ✅'));

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function newLiveMessage() {
  fs.readFile(path.resolve(__dirname, './data/liveMessages.json'), async (err, data) => {
    if (err) return 'livetime!';
    return data[getRandomInt(data.length - 1)];
  });
}

let liveMessage = newLiveMessage();

client.on('ready', () => {
  console.log('Webhook bot ready ✅');
  app.post('/webhook', (req, res) => {
    if (req.body.subscription.type === 'stream.online') {
      console.log('Stream is online! 📹');
      //console.log(req.body);
      client.channels.cache.get(`772497072653336586`).send(`@Stream ${liveMessage} https://twitch.tv/colloquialowl`);
      liveMessage = newLiveMessage();
    }
    res.send('Recieved');
  });
});

client.login(process.env.BOT_TOKEN);
