'use strict';

var Queue = function() {
  this.array = [];
};

Queue.prototype.enqueue = function(item) {
  this.array.push(item);
};

Queue.prototype.dequeue = function() {
  return this.array.shift(this.array[0]);
};

Queue.prototype.peek = function() {
  return this.array[0];
};

Queue.prototype.isEmpty = function() {
  if (this.array.length === 0) {
    return true;
  } else {
    return false;
  }
};

//Test Cases:

var queue = new Queue();

queue.enqueue('a');
queue.enqueue('b');
queue.enqueue('c');
queue.enqueue('d');

console.log('First Queue: ', queue);

queue.dequeue();
queue.dequeue();

console.log('Second Queue: ', queue);

var peek = queue.peek();

console.log('Peek: ', peek);

var notEmpty = queue.isEmpty();

console.log('Is Empty?: ', notEmpty);

queue.dequeue();
queue.dequeue();

var empty = queue.isEmpty();

console.log('Is Empty?: ', empty);
