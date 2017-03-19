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
  return this.array[this.length - 1];
};

Stack.prototype.isEmpty = function() {
  this.array.length === 0 ? 'true': 'false';
};

var stack = new Stack();

stack.push('a');
stack.push('b');
stack.push('c');
stack.push('d');

console.log('First Stack:', stack);

stack.pop();
stack.pop();

console.log('Second Stack:', stack);

stack.peek();

console.log('Peek at the item:', stack);

console.log('Is it Empty:', stack.isEmpty());
