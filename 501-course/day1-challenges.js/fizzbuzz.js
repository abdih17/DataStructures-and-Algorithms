'use strict';

//Write a program that prints all the numbers from 1 to 100. For multiples of 3, instead of the number, print "Fizz", for multiples of 5 print "Buzz". For numbers which are multiples of both 3 and 5, print "FizzBuzz".

var fizzbuzz = function(array) {
  for (var i = 0; i < array.length; i++) {
    if ( array[i] % 15 === 0) {
      console.log('fizzbuzz');
    } else if ( array[i] % 3 === 0) {
      console.log('fizz');
    } else if ( array[i] % 5 === 0) {
      console.log('buzz');
    } else {
      console.log(array[i]);
    }
  }
};

var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

fizzbuzz(array);

//checking the value of the index rather than the index itself
var fizzbuzz2 = function(array) {
  for (var i = 0; i < array.length; i++) {
    if ( array[i] % 15 === 0) {
      console.log('fizzbuzz');
    } else if ( array[i] % 3 === 0) {
      console.log('fizz');
    } else if ( array[i] % 5 === 0) {
      console.log('buzz');
    } else {
      console.log(array[i]);
    }
  }
};

var array2 = [1, 3, 5, 7, 15, 21, 25, 30];

fizzbuzz2(array2);
