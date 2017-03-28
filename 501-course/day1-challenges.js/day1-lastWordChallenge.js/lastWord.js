'use strict';

var testString = 'Hello, will be! home? soon. world';

function lastWord(str) {
  var strSplit = str.split(' ');
  var lastWord = strSplit[strSplit.length - 1];
  var lengthLastWord = lastWord.length;
  return lengthLastWord;
}

var lengthOfLastword = lastWord(testString);

console.log('Length: ', lengthOfLastword);

/**************************REVIEW*******************************/

function lastWordLen(str) {
  var lengthOfLastWord = 0;
  var lengthOfCurrentWord = 0;
  var isValidWord = false;

  if (str.length === 0 ) return 'no string';

  for (var i = 0; i < str.length ; i++) {
    if (str[i] === ' ') {
      if (isValidWord)
        lengthOfLastWord = lengthOfCurrentWord;
      lengthOfCurrentWord = 0;
      isValidWord = false;
    } else {
      if (!isValidWord && !isValidPunctuation(str[i])) {
        isValidWord = true;
        lengthOfCurrentWord ++;
      }
    }
  }
  if (isValidWord)
    return lengthOfCurrentWord;
  else
    return lengthOfLastWord;
}

function isValidPunctuation(ch) {
  if (ch === ' ' || ch === ',' || ch === '?')
    return true;
  return false;
}

var word = 'Hello, two parts!* world! so&& I know!@#';

var lengthOfWord = lastWordLen(word);

console.log('Length: ', lengthOfWord);

/***************************REVIEW****************************/

function lastWordFunction(string) {
  var match = /.*\s(\w+)\W*$/.exec(string);
  return match[1].length;
}

var lastWordTest = lastWordFunction('the quick brown fox jumped over the lazy dog.');

console.log(lastWordTest);
console.log(lastWord('fabulously furry fantastic furballs???\"'));
