'use strict';

var Stack = function() {
  this.array = [];
};

Stack.prototype.push = function(item) {
  this.array.push(item);
};

Stack.prototype.pop = function() {
  return this.array.pop();
};

Stack.prototype.peek = function() {
  return this.array[this.array.length - 1];
};

Stack.prototype.isEmpty = function() {
  if (this.array === 0) {
    return true;
  } else {
    return false;
  }
};

//Test Cases:

var stack = new Stack();

stack.push('a');
stack.push('b');
stack.push('c');
stack.push('d');

console.log('First Stack:', stack);

stack.pop();
stack.pop();

console.log('Second Stack:', stack);

var peek = stack.peek();

console.log('Peek at the item:', peek);

var notEmpty = stack.isEmpty();

console.log('Is it Empty:', notEmpty);

stack.pop();
stack.pop();

var empty = stack.isEmpty();

console.log('Is it Empty:', empty);
