const ordinal = require('../../tools/ordinalSuffix');

async function checkRank(channel, tags, message, client, ComfyDB){
    let target = tags.username;
    if (message !== '+rank'){
        target = message.split(' ')[1];
        target = target.replace('@', '');
    }
    let nameCheck = await ComfyDB.Get(target);
    if (!nameCheck) return `${target} isn't in the database!`;
    if (nameCheck.rank) {
        let rank = ordinal(nameCheck.rank);
        return `${target} is ranked ${rank} with ${nameCheck.points} points`;
    }
    return `${target} has ${nameCheck.points} points, but they aren't ranked!`
};

module.exports = checkRank;
