var nodeA = { name: 'A', edges: [] };
var nodeB = { name: 'B', edges: [] };
var nodeC = { name: 'C', edges: [] };
var nodeD = { name: 'D', edges: [] };
var nodeE = { name: 'E', edges: [] };

nodeA.edges.push({ from: nodeA, to: nodeB, value: 5 });
nodeB.edges.push({ from: nodeB, to: nodeC, value: 1 });
nodeB.edges.push({ from: nodeB, to: nodeE, value: 5 });
nodeC.edges.push({ from: nodeC, to: nodeE, value: 2 });
nodeE.edges.push({ from: nodeE, to: nodeD, value: 4 });

function printEdge(edge) {
  console.log("From: ", edge.from.name, ", to: ", edge.to.name, " distance: " + edge.value + " miles");
}

function printPath(path) {
  console.log("This is another route:");
  for (var i = 0; i < path.length; ++i) {
    printEdge(path[i]);
  }
}

function printPaths(start, destination) {
  var paths = [];
  findPaths(start, destination, paths, []);
  // Print paths
  for (var i = 0; i < paths.length; ++i) {
    printPath(paths[i]);
  }
}

// paths is array of arrays that contains currentPath
// current path is just array of edges
function findPaths(start, destination, paths, currentPath) {
  if (start === destination) {
    paths.push(currentPath);
    return;
  }

  for(var i = 0; i < start.edges.length; i++) {
    var edge = start.edges[i];
    currentPath.push(edge);
    findPaths(edge.to, destination, paths, copyArray(currentPath));
  }
}

function copyArray(a) {
  var copy = [];
  for (var i = 0; i < a.length; i++) {
    copy.push(a[i]);
  }
  return copy;
}

printPaths(nodeA, nodeD);
