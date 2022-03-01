async function addPerson(channel, tags, message, client, ComfyDB) {
    let nameCheck = await ComfyDB.Get(tags.username);
    if (nameCheck) return `${tags.username} is already in the database!`;
    await ComfyDB.Store( tags.username, { username: tags.username, points: 1 } );
    return `${tags.username} has been added!`;
}

module.exports = addPerson;
