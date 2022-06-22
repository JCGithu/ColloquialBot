async function steakHouse(channel, tags, message, client, ComfyDB){
  let data = await ComfyDB.Get('steak');
  return `/me There's ${data.current} steaks on the Discord stack right now.`;
};

module.exports = steakHouse;
