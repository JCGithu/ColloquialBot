const getRandomInt = require("../../../tools/getRandomInt");

let data = [
    "hello yourself ;)",
    "sup.",
    "Woah, hey there buddy!",
    "Well..... hello",
    "Oh my god you're like soooo funny *curls hair around finger*",
    "Please keep this professional",
    "Bye!"
]

module.exports = () => { return data[getRandomInt(data.length)]}