
async function run(channel, tags, message, client){
    if (!tags.badges.broadcaster) return 'Only the broadcaster can use this command.';
    client.channels.cache
    .get(`772497072653336586`)
    .send(`${message.substring(8)}`);
return 'Discord notified!'
}

module.exports = run;