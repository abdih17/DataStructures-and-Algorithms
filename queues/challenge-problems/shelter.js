'use strict';

// TODO: finish the markdown for this problem.
// TODO: also write out the problem from Cracking the Coding Interview

var Queue = function() {
  this.dog = [];
  this.cat = [];
  this.counter = 0;
};

//this function will return the oldest dog from the dog array, with the input of a user who wants a dog
Queue.prototype.dequeueDog = function() {
  return this.dog.shift();
};

//this method will return the oldest cat in the cats array
Queue.prototype.dequeueCat = function() {
  return this.cat.shift();
};

/* this method will push pets into the shelter, but by segregating the cats from the dogs while keeping a counter on every pet */
Queue.prototype.enqueuePet = function(pet) {
  var newPet = {};
  newPet.type = pet;
  newPet.count = this.counter++;

  if(newPet.type === 'dog') {
    this.dog.push(newPet);
  } else {
    this.cat.push(newPet);
  }
};

/* this method will remove any pet from either arrays, but in order of the oldest cat or dog */
Queue.prototype.dequeueAny = function() {
  var firstCat = this.cat[0].count;
  var firstDog = this.dog[0].count;

  if (firstCat > firstDog) {
    return this.dog.shift();
  } else {
    return this.cat.shift();
  }
};

var queue = new Queue();

queue.enqueuePet('dog'); //{type: dog, count: 0}
queue.enqueuePet('dog'); //{type: dog, count: 1}
queue.enqueuePet('cat'); //{type: cat, count: 2}
queue.enqueuePet('cat'); //{type: cat, count: 3}
queue.enqueuePet('dog'); //{type: dog, count: 4}
queue.enqueuePet('dog');
queue.enqueuePet('dog');
queue.enqueuePet('cat');
queue.enqueuePet('dog');

console.log('Original Queue:', queue);
console.log('-----------------------BREAK--------------------');

var dequeueFirstElement = queue.dequeueAny();
console.log('Dequeue Any:', dequeueFirstElement);

var firstDequeueDog = queue.dequeueDog();
console.log('Dequeue Dog:', firstDequeueDog);
var secondDequeueDog = queue.dequeueDog();
console.log('Dequeue Second Dog:', secondDequeueDog);
var firstDequeueCat = queue.dequeueCat();
console.log('Dequeue First Cat:', firstDequeueCat);

console.log('-----------------------BREAK--------------------');
console.log('Manipulated Queue:', queue);
