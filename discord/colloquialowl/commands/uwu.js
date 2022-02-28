const uwuify = require('../../../generalCommands/uwuify.js');

async function run(message, ComfyDB){
  return uwuify(message);
}

module.exports = run;
