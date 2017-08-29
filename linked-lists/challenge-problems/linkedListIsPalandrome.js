var node1 = { data: 'L', next: null};
var node2 = { data: 'E', next: null};
var node3 = { data: 'V', next: null};
var node4 = { data: 'E', next: null};
var node5 = { data: 'L', next: null};

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;

var beginningPointer = [], endPointer = [];

function linkedListIsPalandrome(node){
  if(node !== null) {
    endPointer.push(node.data);
    beginningPointer.push(node.data);
    linkedListIsPalandrome(node.next);
  } else {
    var reversedString = endPointer.reverse();
    //comparing both original data to reversed data
    if(beginningPointer.length === reversedString.length) {
      for(var i = 0; i < reversedString.length; i++){
      	console.log('original: ' + beginningPointer[i]);
        console.log('original: ' + reversedString[i]);
				if(beginningPointer[i] !== reversedString[i]) return false;
      }
    } else {
    	return false;
    }
    return true;
  }
}

console.log(linkedListIsPalandrome(node1)); //return if 'level' & returns false if 'lawyer'.
