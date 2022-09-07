const getRandomInt = require("../../tools/getRandomInt")

let data = [
    "It's alive!!!",
    "1.2. 1.2. Is this this on?",
    "Ah ah ah ah starting a live, starting a live",
    "This is not a drill",
    "Live-ing & vibing",
    "Your friendly neighbourhood Discord bot would like you to check out the stream please!",
    "10 Secrets of how to watch this livesteam. Number 6 will shock you!",
    "like comment subscribe",
    "Where we're going, we don't need streams",
    "Hahaha oh what's that? You just caught me watching this really funny stream, you can check it out here.",
    "I am programmed to generate hype. Hype generated.",
    "ColloquialOwl is filmed in front of a live studio audience",
    "No Owls are harmed in the production of this stream",
    "Hello fellow kids can I get a sheesh for this cringfest over here lmao",
    "[90's reference]",
    "*Cue applause*",
    "Breaking: Man breaks down on livestream",
    "Woah, just found this stream I think you'd like xXxXx",
    "Tell this guy 'colloquialbot sent me' for a special discount, he knows the drill",
    "This generated message demands your attention",
    "In my own lane, thriving",
    "Will the audio levels be right? Find out this week on the latest episode... ",
    "Where we droppin'?"
]

async function run(channel, tags, message, client){
    if (!tags.badges.broadcaster) return 'Only the broadcaster can use this command.';
    client.channels.cache
    .get(`772497072653336586`)
    .send(`<@&786544562193432628> ${data[getRandomInt(data.length)]} <https://twitch.tv/colloquialowl>`);
return 'Discord notified!'
}

module.exports = run;