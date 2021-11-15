async function setPoints(channel, tags, message, client, ComfyDB) {
    if (!tags.badges.broadcaster) return 'Only the broadcaster can use this command.';
    let target = message.split(' ')[1].toLowerCase();
    let amount = parseInt(message.split(' ')[2]);
    let nameCheck = await ComfyDB.Get(target);
    if (!nameCheck) return `${target} isn't in the database!`;
    await ComfyDB.Store( target, { username: target, points: amount } );
    return `${target}'s points have been set to ${amount}`;
};


module.exports = setPoints;
