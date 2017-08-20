'use strict';

var root = { data: 5, children: [] };
//children node objects will be stored in an array
var node1 = { data: 1, children: [] };
var node2 = { data: 2, children: [] };
var node3 = { data: 3, children: [] };
var node4 = { data: 4, children: [] };
var node5 = { data: 5, children: [] };
//using the root's 'children' property to push each child node in
root.children.push(node1);
root.children.push(node2);
root.children.push(node3);
root.children.push(node4);
root.children.push(node5);

node1.children.push(node2);
node1.children.push(node3);
node1.children.push(node4);
node1.children.push(node5);

var counter = 0;

function sumOfChildren(node){
  if(!node) return 0;

  var data = node.data;
  console.log(data)
  counter += data

  for(var i = 0; i < node.children.length; i++){
    sumOfChildren(node.children[i])
  }

  return counter;
}

sumOfChildren(root);
