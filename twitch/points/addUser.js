async function addPerson(channel, tags, message, client, ComfyDB) {
    if (!tags.badges.broadcaster) {
        if (!tags.badges.moderator) return 'Only mods can use this command.';
    }
    let target = message.split(' ')[1].toLowerCase();
    let nameCheck = await ComfyDB.Get(target);
    if (nameCheck) return `${target} is already in the database!`;
    await ComfyDB.Store( target, { username: target, points: 0 } );
    return `${target} has been added!`;
}

module.exports = addPerson;
