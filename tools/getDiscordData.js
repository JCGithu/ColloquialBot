module.exports = (fs, path, twitchChannels) => {
    let output = {
        "colloquialowl": {
            "id": "772398840954748948",
            "commands": [],
        },
        "jack": {
            "id": "692853487104688158",
            "commands": [],
        },
    }
    let serverList = Object.keys(output);

    for (let server of serverList){
        let dir = `./discord/${server}/commands`
        let files = fs.readdirSync(dir);
        for (let file of files) {
          output[server].commands.push(path.parse(file).name);
        }
        let roles = require(`../discord/${server}/roles.json`);
        output[server].roles = roles;
    }

    return output;
};
