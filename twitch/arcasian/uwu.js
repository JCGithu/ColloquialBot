function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

var kaomojiJoy        = [" (* ^ ω ^)", " (o^▽^o)", " (≧◡≦)", " ☆⌒ヽ(*\"､^*)chu", " ( ˘⌣˘)♡(˘⌣˘ )", " xD"];
var kaomojiEmbarassed = [" (⁄ ⁄>⁄ ▽ ⁄<⁄ ⁄)..", " (*^.^*)..,", "..,", ",,,", "... ", ".. ", " mmm..", "O.o"];
var kaomojiConfuse    = [" (o_O)?", " (°ロ°) !?", " (ーー;)?", " owo?"];
var kaomojiSparkles   = [" *:･ﾟ✧*:･ﾟ✧ ", " ☆*:・ﾟ ", "〜☆ ", " uguu.., ", "-.-"];

function uwuinate() {
  function uwuWord(word, index) {

    if (word === '*') return kaomojiSparkles[getRandomInt(kaomojiSparkles.length)];
    
    let uwu = "";
    let lastChar = word[word.length - 1];
    let end = "";
    let random = 0;
    if (lastChar == '.' || lastChar == '?' || lastChar == '!') {
      word = word.slice(0, -1);
      end = lastChar;
      if (end === '!') end = kaomojiJoy[getRandomInt(kaomojiJoy.length)];
      if (end === '?') end = kaomojiConfuse[getRandomInt(kaomojiConfuse.length)];
      if (end === '.') end = kaomojiEmbarassed[getRandomInt(kaomojiEmbarassed.length)];
      if (getRandomInt(1)) end += kaomojiSparkles[getRandomInt(kaomojiSparkles.length)];
    }
  
    if (word.indexOf('l') > -1) {
      if (word.slice(-2) == "le" || word.slice(-2) == "ll") {
        uwu += word.slice(0, -2).replace(/l/g, 'w').replace(/r/g, 'w') + word.slice(-2);
      }
      else if (word.slice(-3) == "les" || word.slice(-3) == "lls") {
        uwu += word.slice(0, -3).replace(/l/g, 'w').replace(/r/g, 'w') + word.slice(-3);
      }
      else {
        uwu += word.replace(/l/g, 'w').replace(/r/g, 'w');
      }
    }
    else if (word.indexOf('r') > -1) {
      if (word.slice(-2) == "er" || word.slice(-2) == "re") {
        uwu += word.slice(0, -2).replace(/r/g, 'w') + word.slice(-2);
      }
      else if (word.slice(-3) == "ers" || word.slice(-3) == "res") {
        uwu += word.slice(0, -3).replace(/r/g, 'w') + word.slice(-3);
      }
      else {
        uwu += word.replace(/r/g, 'w');
      }
    }
    else uwu += word;
  
    uwu = uwu.replace(/you're/g, "ur");
    uwu = uwu.replace(/youre/g, "ur");
    uwu = uwu.replace(/shit/g, "poopoo");
    uwu = uwu.replace(/asshole/g, "b-butthole");
    uwu = uwu.replace(/\bdad\b/g, "daddy");
    uwu = uwu.replace(/\bfather\b/g, "daddy");
    uwu = uwu.replace(/\bcute\b/g, "cutie ;)");
  
    //Stutter
    if (uwu.length > 2 && uwu[0].match(/[a-z]/i) && getRandomInt(5) == 0) uwu = uwu[0] + '-' + uwu;

    return uwu += end + ' ';
  }

  if (!text) return false;
  text = text.replace('!uwu','');
  text = text.toLowerCase();
  let textArray = text.split(' ');
  let finalText = textArray.map(x => uwuWord(x)).join('');
  finalText = finalText;
  return finalText;
}

uwuinate();

