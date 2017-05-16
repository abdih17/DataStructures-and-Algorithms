'use strict';

/* Breath First:
  - Level Order Traversal: going through each level of the tree from left to right.
*/

/* Depth First:
  -
*/

/* Depth First Traversal Strategies:
  - Preorder: (D, L, R);
  - Inorder: (L, D, R);
  - Postorder: (L, R, D);
*/


function Node(data) {
  this.data = data;
  this.left = null;
  this.right = null;
}

function BinarySearchTree() {
  this.root = null;
}

function Hello(data)

var bst = new BinarySearchTree();
bst.root = new Node('A');
bst.root.left = new Node('B');
bst.root.left.left = new Node('C');
bst.root.left.left.left = new Node('D');
bst.root.left.right = new Node('E');
bst.root.left.right.left = new Node('F');
bst.root.left.right.right = new Node('G');
bst.root.right = new Node('H');
bst.root.right.left = new Node('I');
bst.root.right.left.left = new Node('J');
bst.root.right.left.right = new Node('K');
bst.root.right.right = new Node('L');
bst.root.right.right.right = new Node('M');
bst.root.right.right.right.right = new Node('N');

BinarySearchTree.prototype.add = function(data) {
  var root = this.root;

  if(!root){
    this.root = new Node(data);
    return;
  }

  var currentNode = root;
  var newNode = new Node(data);

  while(currentNode){
    if(data < currentNode.data){
      if(!currentNode.left){
        currentNode.left = newNode;
        break;
      }
      else{
        currentNode = currentNode.left;
      }
    }
    else{
      if(!currentNode.right){
        currentNode.right = newNode;
        break;
      }
      else{
        currentNode = currentNode.right;
      }
    }
  }
};

BinarySearchTree.prototype.remove = function(data) {
  var that = this;
  var removeNode = function(node, data) {
    if(!node) {
      return null;
    }
    if(data === node.data) {
      if(!node.left && !node.right) {
        return null;
      }
      if(!node.left) {
        return node.right;
      }
      if(!node.right) {
        return node.left;
      }
      // 2 children
      var temp = that.getMin(node.right);
      node.data = temp;
      node.right = removeNode(node.right, temp);
      return node;
    } else if(data < node.data) {
      node.left = removeNode(node.left, data);
      return node;
    } else {
      node.right = removeNode(node.right, data);
      return node;
    }
  };
  this.root = removeNode(this.root, data);
};

BinarySearchTree.prototype.contains = function(data) {
  var current = this.root;
  while(current) {
    if(data === current.data) {
      return true;
    }
    if(data < current.data) {
      current = current.left;
    } else {
      current = current.right;
    }
  }
  return false;
};

BinarySearchTree.prototype._preOrder = function(node, fn) {
  if(node) {
    if(fn) {
      fn(node);
    }
    this._preOrder(node.left, fn);
    this._preOrder(node.right, fn);
  }
};

BinarySearchTree.prototype._inOrder = function(node, fn) {
  if(node) {
    this._inOrder(node.left, fn);
    if(fn) {
      fn(node);
    }
    this._inOrder(node.right, fn);
  }
};

BinarySearchTree.prototype._postOrder = function(node, fn) {
  if(node) {
    this._postOrder(node.left, fn);
    this._postOrder(node.right, fn);
    if(fn) {
      fn(node);
    }
  }
};

// function traverseDFS(node){
//   if(node){
//     console.log(node.value);
//     traverseDFS(node.left);
//     traverseDFS(node.right);
//   }
// }

BinarySearchTree.prototype.traverseDFS = function(node) {
  if(node){
    console.log(node.value);
    traverseDFS(node.left);
    traverseDFS(node.right);
  }
};

BinarySearchTree.prototype.traverseBFS = function(fn) {
  this.queue = [];
  this.queue.push(this.root);
  while(this.queue.length) {
    var node = this.queue.shift();
    if(fn) {
      fn(node);
    }
    if(node.left) {
      this.queue.push(node.left);
    }
    if(node.right) {
      this.queue.push(node.right);
    }
  }
};
