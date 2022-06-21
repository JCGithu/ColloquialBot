async function steakHouse(message, content, ComfyDB){
    let data = await ComfyDB.Get('steak');
    return `_There's ${data.current} steaks on the stack right now. The highscore is ${data.highscore}!_`
};

module.exports = steakHouse;
