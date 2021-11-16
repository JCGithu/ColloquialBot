const getRandomInt = require("../../../tools/getRandomInt")

let data = [
    "PETRIL ⛽",
    "PETRIL ⛽",
    "PETRIL ⛽",
    "PETRIL ⛽",
    "CHEESE 🧀",
    "CHEESE 🧀",
    "CHEESE 🧀",
    "CHEESE 🧀",
    "CHEESE 🧀",
    "CHEEZOID ONLY KNOWS PAIN 😟"
]

module.exports = () => {return data[getRandomInt(data.length)]}