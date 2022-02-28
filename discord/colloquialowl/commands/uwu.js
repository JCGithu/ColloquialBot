const uwuify = require('../../../generalCommands/uwwify.js');

async function run(message, ComfyDB){
  return uwuify(message);
}

module.exports = run;
