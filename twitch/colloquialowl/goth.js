const gothic = require('../../tools/gothic');

async function goth(channel, tags, message, client, ComfyDB){
  message = message.replace('!goth', "");
  return gothic(message)
};

module.exports = goth;