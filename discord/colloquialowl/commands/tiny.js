const tiny = require('tiny-text');

async function run(message, content, ComfyDB){
    message = message.replace('!tiny', "");
    let output = tiny(message);
    return `Here's your order! ${output}`;
}

module.exports = run;