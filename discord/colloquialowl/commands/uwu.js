const uwuify = require('../../../generalCommands/uwuify.js');

async function run(message, content, ComfyDB){
  return uwuify(message);
}

module.exports = run;
