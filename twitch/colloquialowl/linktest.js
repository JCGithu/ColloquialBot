async function run(channel, tags, message, client){
    if (!tags.badges.broadcaster) return 'Only the broadcaster can use this command.';
    client.channels.cache
    .get(`772497072653336586`)
    .send(`<https://twitch.tv/colloquialowl>`);
return 'Discord notified!'
}

module.exports = run;
