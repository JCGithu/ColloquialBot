const flip = require('../../../generalCommands/upsideDown.js');

async function run(message, content, ComfyDB){
  message = message.replace('!upside', "");
  return flip(message);
}

module.exports = run;
