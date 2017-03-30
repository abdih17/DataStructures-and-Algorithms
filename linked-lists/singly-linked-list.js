'use strict';

function Node(data) {
  this.data = data;
  this.next = null;
}

function SinglyLinkedList() {
  this.head = null;
  this.tail = null;
  this.size = 0;
}

SinglyLinkedList.prototype.addToFront = function(data) {
  var node = new Node(data);

  if (!this.head) {
    this.head = node;
    this.tail = node;
    this.size++;
    return node;
  } else {
    var currentNode = this.head;
    this.head = node;
    this.head.next = currentNode;
    this.size++;
  }

  return node;
};

SinglyLinkedList.prototype.addToMiddle = function(data) {
  var node = new Node(data);
  var currentNode = this.head;

  if(this.head === null) {
    currentNode = node;
    this.head = node;
    this.tail = node;
    this.size++;
    return node;
  } else if (this.head.next !== null && this.tail.next === null) {
    var fast = currentNode;
    var slow = currentNode;
    var increment = false;

    while (fast && fast.next) {
      if(increment){
        slow = slow.next;
      }
      increment = !increment;
      fast = fast.next;
    }
    var slowNext = slow.next;
    slow.next = node;
    node.next = slowNext;
    this.size++;
  } else {
    return node;
  }
};

SinglyLinkedList.prototype.addToEnd = function(data) {
  var node = new Node(data);

  if(!this.head) {
    this.head = node;
    this.tail = node;
    this.size++;
    return node;
  } else {
    var currentNode = this.tail;
    this.tail = node;
    currentNode.next = this.tail;
    this.size++;
  }

  return node;
};

var sll = new SinglyLinkedList();
sll.addToFront('A');
sll.addToFront('B');
sll.addToFront('C');
sll.addToFront('D');

sll.addToMiddle('5');

console.log('First Singly Linked List: ', sll);

/*
First Singly Linked List:  SinglyLinkedList {
  head: Node { data: 'D', next: Node { data: 'C', next: [Object] } },
  tail: Node { data: 'A', next: null },
  size: 5 }
*/

sll.addToEnd('hello');

console.log('Last Singly Linked List: ', sll);

/*
Last Singly Linked List:  SinglyLinkedList {
  head: Node { data: 'D', next: Node { data: 'C', next: [Object] } },
  tail: Node { data: 'hello', next: null },
  size: 6 }
*/
