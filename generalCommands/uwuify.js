const getRandomInt = require('../tools/getRandomInt.js');

var kaomojiJoy        = [" (* ^ ω ^)", " (o^▽^o)", " (≧◡≦)", " ☆⌒ヽ(*\"､^*)chu", " ( ˘⌣˘)♡(˘⌣˘ )", " xD"];
var kaomojiEmbarassed = [" (⁄ ⁄>⁄ ▽ ⁄<⁄ ⁄)..", " (*^.^*)..,", "..,", ",,,", "... ", ".. ", " mmm..", "O.o"];
var kaomojiConfuse    = [" (o_O)?", " (°ロ°) !?", " (ーー;)?", " owo?"];
var kaomojiSparkles   = [" *:･ﾟ✧*:･ﾟ✧ ", " ☆*:・ﾟ ", "〜☆ ", " uguu.., ", "-.-"];

function uwuinate(text) {
  if (!text) return false;
  text = text.replace('!uwu','');
  text = text.toLowerCase();
  var textArray = text.split(' ');
  let finalText = textArray.map(x => uwuWord(x)).join('');
  finalText = finalText;
  return finalText;
}

function uwuWord(word, index) {
  var uwu = "";

  var lastChar = word[word.length - 1];
  var end = "";
  var random = 0;
  if (lastChar == '.' || lastChar == '?' || lastChar == '!' || lastChar == ',') {
    word = word.slice(0, -1);
    end = lastChar;
    if (end === '.' || end === '!') end = kaomojiJoy[getRandomInt(kaomojiJoy.length)];
    if (end === '?') end = kaomojiConfuse[getRandomInt(kaomojiConfuse.length)];
    if (end == ',') end = kaomojiEmbarassed[getRandomInt(kaomojiEmbarassed.length)];

    let sparkle = getRandomInt(1);
    if (sparkle) end = end + kaomojiSparkles[getRandomInt(kaomojiSparkles.length)];
  }

  if (word.indexOf('l') > -1) {
    if (word.slice(-2) == "le" || word.slice(-2) == "ll") {
      uwu += word.slice(0, -2).replace(/l/g, 'w').replace(/r/g, 'w') + word.slice(-2) + end + ' ';
    }
    else if (word.slice(-3) == "les" || word.slice(-3) == "lls") {
      uwu += word.slice(0, -3).replace(/l/g, 'w').replace(/r/g, 'w') + word.slice(-3) + end + ' ';
    }
    else {
      uwu += word.replace(/l/g, 'w').replace(/r/g, 'w') + end + ' ';
    }
  }
  else if (word.indexOf('r') > -1) {
    if (word.slice(-2) == "er" || word.slice(-2) == "re") {
      uwu += word.slice(0, -2).replace(/r/g, 'w') + word.slice(-2) + end + ' ';
    }
    else if (word.slice(-3) == "ers" || word.slice(-3) == "res") {
      uwu += word.slice(0, -3).replace(/r/g, 'w') + word.slice(-3) + end + ' ';
    }
    else {
      uwu += word.replace(/r/g, 'w') + end + ' ';
    }
  }
  else {
    uwu += word + end + ' ';
  }

  if (word === '*'){
    uwu += kaomojiSparkles[getRandomInt(kaomojiSparkles.length)] + end + ' ';
  }

  uwu = uwu.replace(/you're/g, "ur");
  uwu = uwu.replace(/youre/g, "ur");
  uwu = uwu.replace(/shit/g, "poopoo");
  uwu = uwu.replace(/asshole/g, "b-butthole");
  uwu = uwu.replace(/\bdad\b/g, "daddy");
  uwu = uwu.replace(/\bfather\b/g, "daddy");
  uwu = uwu.replace(/\bcute\b/g, "cutie ;)");

  //Stutter
  if (uwu.length > 2 && uwu[0].match(/[a-z]/i)) {
    random = Math.floor(Math.random() * 5);
    if (random == 0) uwu = uwu[0] + '-' + uwu;
  }
  return uwu;
}

async function run(message){
  return uwuinate(message);
}

module.exports = run;
