'use strict';

var root = { val: 12, left: null, right: null };
var node1 = { val: 9, left: null, right: null };
var node2 = { val: 17, left: null, right: null };
var node3 = { val: 6, left: null, right: null };
var node4 = { val: 10, left: null, right: null };
var node5 = { val: 14, left: null, right: null };
var node6 = { val: 22, left: null, right: null };
var node7 = { val: 15, left: null, right: null };
var node8 = { val: 8, left: null, right: null };
var node9 = { val: 25, left: null, right: null };

root.left = node1;
root.right = node2;
node1.left = node3;
node1.right = node4;
node3.right = node8;
node2.left = node5;
node2.right = node6;
node5.right = node7;
node6.right = node9;

function deletingANode(root, node){
  if(root === node) return;

  currentNode = root;

  while(currentNode !== node){
    if(currentNode.val < node.val) {
      
    }
  }
}
