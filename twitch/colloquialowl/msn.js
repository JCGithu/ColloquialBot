const gothic = require('../../tools/gothic');
const getRandomInt = require("../../tools/getRandomInt");

console.log("msn loaded");

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
  "˚♡˚"
];

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
];

async function emojiString(amount) {
    let run = getRandomInt(amount);
    let output = [''];
    for (let i = 0; i < run; i++){
      output.push(emoji[getRandomInt(emoji.length)]);
    }
    return output;
  }

async function msn(channel, tags, message, client, ComfyDB){
  console.log("msn ran");
  let randomLyric = song[getRandomInt(song.length)];
  let randomBonus = bonus[getRandomInt(bonus.length)];
  let emotes = await emojiString(5);

  let chance = getRandomInt(10);
  let bonusString = '';
  if (chance === 7) bonusString = randomBonus;
  let final = gothic(tags.username + ': ' + bonusString + emotes.join('') + randomLyric + emotes.reverse().join('') + bonusString);

  return final;
};

module.exports = msn;

