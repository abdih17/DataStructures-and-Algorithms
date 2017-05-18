'use strict';


const SinglyLinkedList = require('./singly-linked-list.js');

SinglyLinkedList.prototype.reverseSinglyLinkedList = function() {

  if(!this.head && this.head.next === null) return;

  var tempHead = this.head;
  // TODO: WHY IS IT COMPLAINING???
  var tempTail = this.tail;

  var previousNode = this.head;
  var currentNode = this.head.next;
  var tempNode = this.head;
  this.head.next = null;

  while(currentNode.next !== null) {
    tempNode = currentNode;
    currentNode = currentNode.next;
    tempNode.next = previousNode;
    previousNode = tempNode;
  }

  currentNode.next = tempNode;
  tempHead = this.tail;
  tempTail = this.head;
  tempTail.next = null;
};

var sll = new SinglyLinkedList();

sll.addToFront('A'); // adds all of the 'data' into the linked list
sll.addToFront('B');
sll.addToFront('C');
sll.addToFront('D');
sll.addToFront('E');
sll.addToFront('F');

console.log('First Singly Linked List: ', sll);

sll.reverseSinglyLinkedList();

// TODO: Test this functionality to see if it works.

console.log('Reversed Singly Linked List: ', sll);
