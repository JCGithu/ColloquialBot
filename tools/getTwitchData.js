module.exports = (fs, path, twitchChannels) => {
    let output = {
        "points": {
            "add": {
                "chat": true,
                "path": `./twitch/points/addUser.js`
            },
            "me": {
                "chat": true,
                "path": `./twitch/points/me.js`
            },
            "rerank": {
                "chat": true,
                "path": `./twitch/points/rerank.js`
            },
            "rank": {
                "chat": true,
                "path": `./twitch/points/rank.js`
            },
            "setpoints": {
                "chat": true,
                "path": `./twitch/points/setPoints.js`
            },
            "plus": {
                "chat": false,
                "reward": `a6280385-8c67-4448-b4ac-83cf956f7a07`,
                "path": `./twitch/points/plus.js`
            }
        }
    }
    for (let chan of twitchChannels){
        output[chan] = {
            commands: [],
            loop: 1,
            prevMsg: ''
        };
        let dir = `./twitch/${chan}`
        let files = fs.readdirSync(dir);
        for (let file of files) {
          output[chan].commands.push(path.parse(file).name);
        }
    }

    return output;
};
