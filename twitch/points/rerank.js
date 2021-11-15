async function reRank(channel, tags, message, client, ComfyDB){
    if (!tags.badges.broadcaster) return 'Only the broadcaster can use this command.';
    let sort = await ComfyDB.Search({ sortBy: "points", sort: "desc"});
    for (let result in sort){
        let newRank = parseInt(result) + 1;
        await ComfyDB.Store( sort[result].username, { rank: newRank});
    }
    return `Top 100 users ranked!`;
};

module.exports = reRank;
