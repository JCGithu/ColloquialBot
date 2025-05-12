const gothic = require('../../../tools/gothic');

async function goth(message, content, ComfyDB){
  message = message.replace('!goth', "");
  return gothic(message)
};

module.exports = goth;