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

// paths is an array of arrays that contains currentPath
// currentPath is just an array of edges
function findPaths(start, destination, paths, currentPath) {

  for(var i = 0; i < start.edges.length; i++) {
    var edge = start.edges[i];
    currentPath.push(edge);
    if (start === destination) {
    paths.push(currentPath);
    currentPath = [];
    return;
  	} else {
    	 findPaths(edge.to, destination, paths, currentPath);

    }
   }

  return false
}

printPaths(nodeA, nodeD);
