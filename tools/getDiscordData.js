module.exports = (fs, path, twitchChannels) => {
    let output = {
        "colloquialowl": {
            "id": "772398840954748948",
            "commands": [],
        },
        "jack": {
            "id": "692853487104688158",
            "commands": [],
        }
    }
    let serverList = Object.keys(output);



    for (let server of serverList){
        let dir = `./discord/${server}`
        let files = fs.readdirSync(dir);
        for (let file of files) {
          output[server].commands.push(path.parse(file).name);
        }
    }

    console.log(output);

    return output;
};
