'use strict';

function longestChar(input) {
  console.log(input)
  var arrayOfLetters = input.split('');
  var currChar, str = "", longestStr = "", letterCount = {};

  for (var i = 0; i < arrayOfLetters.length; i++) {
    currChar = arrayOfLetters[i];
    if (!letterCount[arrayOfLetters[i]]) {
      str += currChar;
      letterCount[arrayOfLetters[i]] = {index:i};
    } else {
      if(longestStr.length <= str.length) {
        longestStr = str;
      }
      var prevDupIndex = letterCount[currChar].index;
      var strSubstring = input.substring(prevDupIndex + 1, i);
      str = strSubstring + currChar;
      letterCount = {};
      for (var j = prevDupIndex + 1; j <= i; j++) {
        letterCount[input.charAt(j)] = {index:j};
      }
    }
  }

  return longestStr;
}

console.log('LONGEST: ', longestChar('abcabcbb'));
console.log('LONGEST: ', longestChar('bbbbb'));
console.log('LONGEST: ', longestChar('pwwkew'));
