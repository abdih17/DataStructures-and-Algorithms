'use strict';

/* Challenge Description: reverse a string using recursion. */

function reverseString(str) {
  if(str.length === 0) return str;
  return reverseString(str.slice(1)) + str[0];
}

var reversedString = reverseString('hello');

console.log('Reversed String: ', reversedString);
