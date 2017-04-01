'use strict';


const SinglyLinkedList = require('./singly-linked-list.js');

SinglyLinkedList.prototype.reverseSLL = function() {
  var currentNode = this.head;
  var previousNode = this.head;
  var lastNode = this.head;
  var decrement = false;

  if(!this.head) return;

  var current = currentNode;
  var increment = false;

  while (current.next === null) {
    if (increment) {
      previousNode = current;
      current = current.next;
    }
    increment = !increment;
    currentNode = previousNode;

    while (lastNode.next === null) {
      if (decrement) {
        previousNode = current;
        current = current.next;
      }
      decrement = !decrement;
      currentNode = previousNode;
    }
  }

  return;
};
