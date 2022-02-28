const tiny = require('tiny-text');
const uwuify = require('../../../generalCommands/uwuify.js');

async function run(message, ComfyDB){
    message = message.replace('!tinyuwu', "");
    let UWUED = await uwuify(message)
    let output = tiny(UWUED);
    return `Here's your order! ${output}`;
}

module.exports = run;