function isAnagramWords(word, word2) {
  var array = word.split('').sort().join(),
    array2 = word2.split('').sort().join();

  if(array === array2) return true;

  return false;
}

isAnagramWords('cinema', 'iceman'); //true
isAnagramWords('cinema', 'world'); //false
isAnagramWords('dog', 'mom'); //false
