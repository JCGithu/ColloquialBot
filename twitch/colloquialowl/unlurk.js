let data = [
    "{user} has returned from the darkness",
    "{user} came whiffling through the tulgey wood, and burbled as it came!",
    "{user}? Why, that's a username I haven't heard in a long time... *takes drag on pipe*",
    "{user}! Here! In this stream?!",
    "{user} returned when we needed them most",
    "{user}! You've grown so much, look at you!",
    "{user}! Long time no see you old fool.",
    "{user}, by the gods, is that really you?",
    "{user} emerges triumphant.", 
    "{user} returns. *Inception Sound blares*",
    "{user} comes bearing gifts",
    "{user} bursts through the door.",
    "{user} hesitates. Will they really be welcomed here, as though no time has passed at all?",
    "{user} is back and badder than ever",
    "{user} asks what year it is. It's been so long they were trapped in the jungle themed board game.",
    "{user} has reentered the arena."
];

const getRandomInt = require("../../tools/getRandomInt");

async function run(channel, tags, message, client){
    let user = tags.username;
    console.log(tags.username);
    let quote = data[getRandomInt(data.length)];
    quote = quote.replace('{user}', user);
    return quote;
}

module.exports = run;