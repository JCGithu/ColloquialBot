const gothic = require('../../tools/gothic');
const getRandomInt = require("../../tools/getRandomInt")

let emoji = [
  "🥀",
  "✨",
  "🌟",
  "💫",
  "❤️",
  "👿",
  "💀",
  "☠️",
  "🔮",
  "🍂",
  "🪐⁠",
  "*",
  "⁠☆",
  "✧",
  "🎧",
  "♡",
  "˚·",
  "✮",
   "‧₊",
   "☽",
   "❀",
   "｡˚",
   "♱",
   "⋆⋅☆⋅⋆",
   "💋",
   "˚♡˚", 
]

let bonus = [
  "♥️ℒℴνℯ♥️",
  "👁️𝒍𝒐𝒔𝒕 𝒊𝒏 𝒔𝒑𝒂𝒄𝒆..👁️",
  "❀𖤣𖥧𖡼⊱✿⊰𖡼𖥧𖤣❀",
  "✧pink✧",
  "W̯ͤ̾ͣ͝Ḛͭ̉̇͟I̍̅̀̎̊R͉̜̎͡͠D̶͔̭̪̻C̵͉͋̔͞O̖̼ͩ͌͐R͉̜̎͡͠Ḛͭ̉̇͟",
  ".˳·˖✶𓆩𓁺𓆪✶˖·˳..˚⊹. ࣪𓉸 ࣪⊹˚.",
  "{¬ºཀ°}¬",
  "༺𓆩☠︎︎𓆪༻⋆",
  "˗ˏˋ ★ ˎˊ˗"
];

let song = [
  "Im a creep",
  "Im not OooOokkaaAAayYYyy",
  "ur lipstick, his collar.",
  "U r the smell b4 rain.",
  "My hopes r so high that ur kiss mght kill me.",
  "We r the bruised and the tender"
]

function emojiString(amount) {
    let amount = getRandomInt(amount);
    let output = '';
    for (let i = 0; i < amount; i++){
      let randomEmoji = emoji[getRandomInt(emoji.length)];
      output += randomEmoji;
    }
    return output;
  }

async function MSN(channel, tags, message, client, ComfyDB){

  let user = tags.username;
  let name = gothic(user);

  let randomLyric = song[getRandomInt(song.length)];
  let randomBonus = bonus[getRandomInt(bonus.length)];
  let emotes = emojiString(5);

  let chance = getRandomInt(10);
  let bonusString = '';
  if (chance = 7) bonusString = randomBonus;
  
  return name + ': ' + bonusString + emotes + randomLyric + emotes + bonusString;
};

module.exports = MSN;

