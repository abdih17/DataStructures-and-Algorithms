'use strict';

// TODO: work on linked lists operations without the this.tail properties??

function Node(data) {
  this.data = data;
  this.next = null;
}

function SinglyLinkedList() {
  this.head = null;
  this.tail = null;
  this.size = 0;
}

/**********************INSERTION OPERATIONS********************************/

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

/**********************REMOVE OPERATIONS********************************/

SinglyLinkedList.prototype.removeFromFront = function() {
  if (!this.head) return;

  var currentHead = this.head;
  this.head = this.head.next;
  var deletedNode = currentHead;
  currentHead = null;
  this.size--;
  return deletedNode;
};

SinglyLinkedList.prototype.removeFromMiddle = function() {
  var currentNode = this.head;

  if(this.head === null) {
    return;
  } else if (this.head.next !== null && this.tail.next === null) {
    var fast = currentNode;
    var slow = currentNode;
    var increment = false;

    while (fast && fast.next) {
      if(increment){
        var previousSlow = slow;
        slow = slow.next;
      }
      increment = !increment;
      fast = fast.next;
    }
    previousSlow.next = slow.next;
    var currentSlow = slow;
    slow = null;
    this.size--;
    return currentSlow;
  } else {
    return;
  }
};

var sll = new SinglyLinkedList();

sll.addToFront('A'); // adds all of the 'data' into the linked list
sll.addToFront('B');
sll.addToFront('C');
sll.addToFront('D');
sll.addToFront('E');
sll.addToFront('F');

sll.addToMiddle('5'); // adds '5' to the middle of the linked list

console.log('First Singly Linked List: ', sll);

/*
First Singly Linked List:  SinglyLinkedList {
  head: Node { data: 'D', next: Node { data: 'C', next: [Object] } },
  tail: Node { data: 'A', next: null },
  size: 5 }
*/

sll.addToEnd('hello');

console.log('Second Singly Linked List: ', sll);

/*
Second Singly Linked List:  SinglyLinkedList {
  head: Node { data: 'D', next: Node { data: 'C', next: [Object] } },
  tail: Node { data: 'hello', next: null },
  size: 6 }
*/

sll.removeFromFront(); // removes 'F'

console.log('Third Singly Linked List: ', sll);

/*
Third Singly Linked List:  SinglyLinkedList {
  head: Node { data: 'E', next: Node { data: 'D', next: [Object] } },
  tail: Node { data: 'hello', next: null },
  size: 7 }
*/

sll.removeFromMiddle(); // removes 'C'

console.log('Fourth Singly Linked List: ', sll);

/*
Fourth Singly Linked List:  SinglyLinkedList {
  head: Node { data: 'E', next: Node { data: 'D', next: [Object] } },
  tail: Node { data: 'hello', next: null },
  size: 6 }
*/
