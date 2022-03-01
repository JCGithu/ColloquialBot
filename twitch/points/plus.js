const addPerson = require('./me.js')

async function plus(channel, tags, message, client, ComfyDB) {
    if (message.charAt(0) === '@') message = message.substring(1);
    let target = message.split(' ')[0].toLowerCase();
    if (tags.username === target) return `${tags.username} just tried to give THEMSELVES an acorn...`;

    let nameCheck = await ComfyDB.Get(target);
    if (!nameCheck) {
        let newPerson = await addPerson(channel, {username: target}, message, client, ComfyDB);
        console.log(newPerson);
        return `${tags.username} just gave ${target} an acorn! It's their first acorn!`;
    } else {
        await ComfyDB.Increment( "points", { by: 1, where: { username: { equals: target } } } );
        return `${tags.username} just gave ${target} an acorn! They now have ${nameCheck.points + 1} acorns`;
    }
};

module.exports = plus;
