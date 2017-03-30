'use strict';

var isUnique = function(str) {

  var cache = {};
  for (var i = 0; i < str.length; i++) {
    var letter = str[i];
    if (!cache.hasOwnProperty(letter)) {
      cache[letter] = 0;
    }
    cache[letter]++;

    if (cache[letter] > 1) {
      return false;
    }
  }
  return true;
};

isUnique('hello'); // returns false the letter 'l' is repeated twice

isUnique('Bom'); // returns true bc every letter is unique
