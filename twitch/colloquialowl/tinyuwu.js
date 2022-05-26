const tiny = require('tiny-text');
const uwuify = require('../../generalCommands/uwuify');

async function run(channel, tags, message, client){
  message = message.replace('!tinyuwu', "");
  if (!message.length) return '/me No message to UwU :(';
  let UWUED = await uwuify(message)
  let output = tiny(UWUED);
  return output;
}

module.exports = run;