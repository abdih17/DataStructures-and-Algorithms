'use strict';

var root = { data: 2, left: null, right: null };
//left side
var node1 = { data: 7, left: null, right: null };
var node2 = {data: 2, left: null, right: null };
var node3 = {data: 6, left: null, right: null };
var node4 = {data: 5, left: null, right: null };
var node5 = {data: 11, left: null, right: null };
//right side
var node6 = {data: 5, left: null, right: null };
var node7 = {data: 9, left: null, right: null };
var node8 = {data: 4, left: null, right: null };

root.left = node1;           // 2 -> 7
root.right = node6;          // 2 -> 5
node1.left = node2;          // 7 -> 2
node1.right = node3;         // 7 -> 6
node3.left = node4;          // 6 -> 5
node3.right = node5;         // 6 -> 11
node6.right = node7;         // 5 -> 9
node7.left = node8;          // 9 -> 4

function sum(node){
  if(!node) return 0;

  //store the data of each node
  var data = node.data; //node object received -> data only

  //traverse the left and right sides of the tree using recursion
  var rightNode = sum(node.right); //receiving node object
  var leftNode = sum(node.left);   //receiving node object

  return data + rightNode + leftNode;
}

console.log(sum(root));

function product(node){
  if(!node) return 1;

  return node.data * product(node.right) * product(node.left);
}

console.log(product(root));
