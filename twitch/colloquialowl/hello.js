const getRandomInt = require("../../tools/getRandomInt")

let data = [
  "hello yourself ;)",
  "sup.",
  "Woah, hey there buddy!",
  "Well..... hello",
  "Oh my god you're like soooo funny {user} *curls hair around finger*",
  "Please keep this professional",
  "Bye!",
  "Please respect my space",
  "Everyone, gather around, {user} has something they want to say to the rest of the class",
  "I'm glad you're here, {user}",
  "{user}. You're a good kid.",
  "{user} we promised not to meet like this",
  "hey",
  "hello",
  "hi",
  "hey there",
  "what's up",
  "Howdy",
  "{user}...",
  "Hey {user}",
  "Well I'll be... {user}. Back again after all this time.",
  "{user}? Heh. That's a name I haven't heard in a while."
];

async function run(channel, tags, message, client, ComfyDB){
  let user = tags.username;
  let quote = data[getRandomInt(data.length)];
  quote = quote.replace('{user}', user);
  return quote;
};

module.exports = run;