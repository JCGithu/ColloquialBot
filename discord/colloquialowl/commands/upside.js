const flip = require('../../../generalCommands/upsideDown.js');

async function run(message, ComfyDB){
  return flip(message);
}

module.exports = run;
