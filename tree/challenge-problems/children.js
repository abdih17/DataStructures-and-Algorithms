var node1 = { data: 10, children: []};
var node2 = { data: 5, children: []};
var node3 = { data: 15, children: []};
var node4 = { data: 3, children: []};
var node5 = { data: 7, children: []};

node1.children.push(node2);
node1.children.push(node3);
node2.children.push(node4);
node2.children.push(node5);

var root = node1;

function insert(root, value) {
   // value becomes a child of root
  var node = {
    data: value,
    children: [],
  }

  root.children.push(node);
}
insert(root, 6);
insert(node3, 11);

//*****************************************************//

// Start at root, find parent of node
function findParent(root, node) {
  console.log("Looking for node ", node.data, " inside subtree of ", root.data);
  if(root.children.includes(node)){
    return root;
  } else {
    for(var i = 0; i < root.children.length; i++) {
    	var foundNode = findParent(root.children[i], node);
        console.log("FoundNode is ", foundNode && foundNode.data);
        // if (!foundNode) return foundNode.data
        // else return foundNode
      	if (foundNode) return foundNode;
    }
    return null;
  }
}

//remove(node3);

console.log(findParent(node1, node5));

//*****************************************************//

var node11 = findNode(root, 11);
var parent = findParent(root, node11);
console.log("The parent of 11 is ", parent);

function findNode(root, value) {
	console.log("Looking for value ", value, " at node ", root && root.data);
  if(root.data === value) {
    return root;
  }

  for(var i = 0; i < root.children.length; i++) {
    var foundNode = findNode(root.children[i], value);
    console.log("found node is:", foundNode);
    if(foundNode) return foundNode;
  }

  return null;
}

console.log("Looking for 10, found:", findNode(root, 10));
console.log("Looking for 15, found:", findNode(root, 15));
console.log("Looking for 11, found:", findNode(root, 11));

//*****************************************************//
function remove(root, value) {
  var foundNode = findNode(root, value);
  var foundParent = findParent(root, foundNode);
  var indexOfFoundNode = foundParent.children.indexOf(foundNode);
  foundParent.children.splice(indexOfFoundNode, 1);
}

remove(root, 15);
printTree(root);

//*****************************************************//
function removeWithoutChildren(root, value) {
  var foundNode = findNode(root, value);
  var foundParent = findParent(root, foundNode);

  if(foundParent) {
    for(var i = 0; i < foundNode.children.length; i++){
    	foundParent.children.push(foundNode.children[i]);
    }
  } else {
    throw new Error("Can't remove root, sorry!");
  }

  var indexOfFoundNode = foundParent.children.indexOf(foundNode);
  foundParent.children.splice(indexOfFoundNode, 1);
}

console.log("before:");
printTree(root);
removeWithoutChildren(root, 11);
console.log("after:");
printTree(root);

//*******************SUPPLEMENTAL FUNCTIONS*********************//

function printTree(root) {
  printNode(root, '');
}

function printNode(root, indent) {
  if (!root) return;
  console.log(indent, root.data);
  for (var i = 0; i < root.children.length; ++i) {
    printNode(root.children[i], indent + '  ');
  }
}
