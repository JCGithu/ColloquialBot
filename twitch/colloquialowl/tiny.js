const tiny = require('tiny-text');

module.exports = (channel, tags, message, client) => {
    let output = tiny(message);
    return `Here's your order! ${output}`;
};