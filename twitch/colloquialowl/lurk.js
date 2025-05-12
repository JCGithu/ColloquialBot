let data = [
  "{user} is now venturing into a deep void, known only as the... the Lurk", 
  "{user} has other things to be getting on with!",
  "{user} will be watching. Hidden, but watching.",
  "{user} melts into shadow.",
  "{user} drives off into the sunset. Maybe we'll see them again one day.",
  "{user}, farewell. We will all miss you dearly.",
  "{user}, although you venture on, we will keep you in our hearts.",
  "{user} is embarking on a quest. Their destination? Why, only fate knows.",
  "{user}'s eyes gloss over, they seem... distant somehow.",
  "{user} hears a calling. They must leave this planet, their people need them.",
  "{user} smiles, and vanishes in a flash of blinding light.",
  "{user} will return...",
  "{user} has other buisness to attend to.",
  "{user} turns to smoke, their last smile curling into the wind.",
  "{user} has a very important meeting to attend.",
  "{user} can't take this any longer. ColloquialOwl is just too alluring. They think they need some space.",
  "{user} will be back when we need them most.",
  "bye {user}",
  "goodbye {user}",
  "see you {user}",
  "see you soon {user}",
  "one less chatter alert",
  "yikes, we needed that viewership boss",
  "{user} is clocking off",
  "anyone remember {user}?",
  "Call me {user}",
  "I will now assume the identity of {user}.",
  "so long {user}",
  "{user} left. Why do they all leave?",
  "Heads up, {user} is now ghosting us.",
  "Damn, look at them go",
  "uh huh.",
  "...You're still here?"
];

const getRandomInt = require("../../tools/getRandomInt");

async function run(channel, tags, message, client){
    let user = tags.username
    let quote = data[getRandomInt(data.length)]
    quote = quote.replace('{user}', user);
    return quote;
}

module.exports = run;