module.exports = (channelData, twitch, channel, channelName, message) => {
    let data = channelData[channelName];

    if (data.prevMsg === message){
        data.loop = ++data.loop;
        data.prevMsg = message;
    } else {
        if (data.loop > 2) twitch.say(channel, `/me ${data.loop} message streak! 🔥`);
        data.loop = 1;
        data.prevMsg = message;
    }
    return;
};

