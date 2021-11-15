const getRandomInt = require("../../tools/getRandomInt")

let data = [
    "It's alive!!!",
    "1.2. 1.2. Is this this on?",
    "Ah ah ah ah starting a live, starting a live",
    "This is not a drill",
    "Live & vibe",
    "Your friendly neighbourhood Discord bot would like you to check out the stream please!",
    "10 Secrets of how to watch this livesteam. Number 6 will shock you!",
    "like comment subscribe",
    "Where we're going, we don't need streams",
    "Hahaha oh what's that? You just caught me watching this really funny stream, you can check it out here.",
    "Stack Overflow Any% Speedrun",
    "ColloquialOwl is filmed in front of a live studio audience",
    "No Owls are harmed in the production of this stream",
    "Hello fellow kids can I get a sheesh for this cringfest over here lmao",
    "[90's reference]",
    "*Cue applause*",
    "Breaking: Man breaks down on livestream"
]

module.exports = (channel, tags, message, client) => {
    if (!tags.badges.broadcaster) return 'Only the broadcaster can use this command.';
        client.channels.cache
        .get(`772497072653336586`)
        .send(`<@&786544562193432628> ${data[getRandomInt(data.length)]} https://twitch.tv/colloquialowl`);
    return 'Discord notified!'
};