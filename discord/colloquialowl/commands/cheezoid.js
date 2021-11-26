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

async function run(){
    return data[getRandomInt(data.length)]
}

module.exports = run;