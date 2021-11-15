async function plus(channel, tags, message, client, ComfyDB) {
    if (message.charAt(0) === '@') message = message.substring(1);
    let target = message.split(' ')[0].toLowerCase();
    if (tags.username === target) return `${tags.username} just tried to give THEMSELVES a point...`;
    let nameCheck = await ComfyDB.Get(target);
    if (!nameCheck) return `${target} isn't in the database!`;
    await ComfyDB.Increment( "points", { by: 1, where: { username: { equals: message } } } );
    return `${tags.username} just gave ${target} a point! They now have ${nameCheck.points + 1} points`;
};


module.exports = plus;
