'use strict';

//Given a text find the length of the last element.
/* Notes:
  1 - It can be a string that can have non-alphanumeric characters.
  2 - You can mutate the string
  3 - You are provided a isPunction method
*/

// TODO: Test for edgecases!
/**************************REVIEW*******************************/

//Big 0: Time: O(n) Space: Constant

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

//Big 0: Time: O(1) Space: Constant

function lastWordFunction(string) {
  var match = /.*\s(\w+)\W*$/.exec(string);
  return match[1].length;
}

var lastWordTest = lastWordFunction('the quick brown fox jumped over the lazy dog.');

console.log(lastWordTest);
console.log(lastWordFunction('fabulously furry fantastic furballs???\"'));
