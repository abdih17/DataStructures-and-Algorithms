'use strict';

// TODO: Write more information on what this function does and how it relates to a stack data structure.

function fibonacci(num) {
  if (num <= 1) return 1;

  return fibonacci(num - 1) + fibonacci(num - 2);
}

var fibonacciResult = fibonacci(7);

/* Stack:
fibonacci(7) -- fibonacci(7 - 1) + fibonacci(7 - 2); -> f(6) + f(5) --> 21 <<-- Result
fibonacci(6) -- fibonacci(6 - 1) + fibonacci(6 - 2); -> f(5) + f(4) --> 13
fibonacci(5) -- fibonacci(5 - 1) + fibonacci(5 - 2); -> f(4) + f(3) --> 8
fibonacci(4) -- fibonacci(4 - 1) + fibonacci(4 - 2); -> f(3) + f(2) --> 5
fibonacci(3) -- fibonacci(3 - 1) + fibonacci(3 - 2); -> f(2) + f(1) --> 3
fibonacci(2) -- fibonacci(2 - 1) + fibonacci(2 - 2); -> f(1) + 1    --> 2
fibonacci(1) -- fibonacci(1) -> 1                    -> 1           --> 1
fibonacci(0) -- fibonacci(0) -> 1                    -> 1           --> 1
*/

console.log('Result:', fibonacciResult); // Result: 21
