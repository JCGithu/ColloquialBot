async function addPerson(channel, tags, message, client, ComfyDB) {
    let nameCheck = await ComfyDB.Get(tags.username);
    if (nameCheck) return `${tags.username} is already in the database!`;
    if (message === '+me'){
        await ComfyDB.Store( tags.username, { username: tags.username, bio: ' ', points: 0 } );
        return `${tags.username} has been added!`
    }
    await ComfyDB.Store( tags.username, { username: tags.username, bio: message.substring(4), points: 0 } );
    return `${tags.username} has been added!`;
}

module.exports = addPerson;
