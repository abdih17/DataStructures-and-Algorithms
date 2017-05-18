'use strict';

var fizzbuzz = function(array) {
  for (var i = 0; i < array.length; i++) {
    if ( i % 15 === 0) {
      return 'fizzbuzz';
    } else if ( i % 3 === 0) {
      return 'fizz';
    } else if ( i % 5 === 0) {
      return 'buzz';
    } else {
      return 'error';
    }
  }
};

var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

var array2 = [1, 3, 5, 7, 15, 21, 25, 30];

fizzbuzz(array);

fizzbuzz(array2);
