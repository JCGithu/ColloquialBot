const tiny = require('tiny-text');

async function run(channel, tags, message, client){
    message = message.replace('!tiny', "");
    if (!message.length) return '/me No message to tiny :(';
    let output = tiny(message);
    return `Here's your order! ${output}`;
}

module.exports = run;