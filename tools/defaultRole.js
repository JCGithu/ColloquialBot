async function defaultRole(user, discordData){
    for (let server in discordData){
        if (discordData[server].id != user.guild.id) continue;
        if (!discordData[server].roles.default) continue;
        for (let i in discordData[server].roles.default){
            user.roles.add(discordData[server].roles.default[i]);
        }
    }
}

module.exports = defaultRole;