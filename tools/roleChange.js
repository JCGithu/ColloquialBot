async function roleChange(reaction, user, add, client, discordData) {
    if (user.bot) return;
    if (reaction.message.partial) await reaction.message.fetch();
    if (reaction.partial) await reaction.fetch();

    let guild = reaction.message.guild;
    
    for (let server in discordData){
        if (discordData[server].id != guild.id) continue;
        for (let id in discordData[server].roles){
            if (reaction.message.id != id) continue;
            let roles = discordData[server].roles[id]
            for (let i in roles){
                if (reaction.emoji.name != roles[i].emoji) continue;
                if (add) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(roles[i].id);
                    console.log(`${user.username} added the role ${i} ${roles[i].emoji}`);
                    return;
                }
                await reaction.message.guild.members.cache.get(user.id).roles.remove(roles[i].id);
                console.log(`${user.username} removed the role ${i} ${roles[i].emoji}`);
            }  
        }
    }
}

module.exports = roleChange;