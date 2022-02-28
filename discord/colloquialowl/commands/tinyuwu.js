const tiny = require('tiny-text');
const uwu = require('./uwu.js');

async function run(message, ComfyDB){
    message = message.replace('!tinyuwu', "");
    let UWUED = await uwu(message, ComfyDB)
    let output = tiny(UWUED);
    return `Here's your order! ${output}`;
}

module.exports = run;