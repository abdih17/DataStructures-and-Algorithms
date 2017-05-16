'use strict';

var string = 'I love you, maryan';

function printLastWord(str) {
  var splitWord = str.split('');
  console.log(splitWord);
  var lastWord = splitWord.pop();
  return lastWord;
}

printLastWord(string);
