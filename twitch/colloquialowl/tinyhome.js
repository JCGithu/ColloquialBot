let houseData = require('../../data/tinyhome.json');

async function run(channel, tags, message, client){
    let user = '', printUser = '', name = '', district = '', num = 'a house';

    if (message === '!tinyhome'){
        user = tags.username, printUser = tags.username;
    } else {
        user = message.split(' ')[1].replace('@', '').toLowerCase();
        printUser = message.split(' ')[1].replace('@', '');
    }
    if (message.toLowerCase() === '!tinyhome arcasian investments') return '/me Arcasian investments owns... everything'
    if (houseData[user]){
        if (houseData[user].district) district = ` in the ${houseData[user].district}`;
        if (houseData[user].num) num = `${houseData[user].num} houses`;
        if (houseData[user].name) name = ` called ${houseData[user].name}`;
        if (houseData[user].additional) district = district + houseData[user].additional;
        return `${printUser} has ${num}${name}${district}!`;
    }
    return `Sorry, no data for ${user} yet!`;
}

module.exports = run;