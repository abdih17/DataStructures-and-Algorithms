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
    calculateDistance(paths[i])
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
    var forkedPath = copyArray(currentPath);
    forkedPath.push(edge);

    findPaths(edge.to, destination, paths, forkedPath);
  }
}

function copyArray(a) {
  var copy = [];
  for (var i = 0; i < a.length; i++) {
    copy.push(a[i]);
  }
  return copy; // [a, b, c, d]
}
var arrayOfDistances = [];
function calculateDistance(paths) {
	var distance = 0;
  for (var i = 0; i < paths.length; ++i) {
    distance += paths[i].value;
  }
  arrayOfDistances.push(distance);
  findShortestDistance(arrayOfDistances);
}

var min = 0;
function findShortestDistance(distances) {
	console.log('DISTANCES:', distances);
  if(distances.length > 2) {
  	for(var i = 0; i < distances.length; i++){
  		var currentNumber = distances[i];
      if(min > currentNumber){
        min = currentNumber;
      } else {
        continue;
      }
  	}
  } else {
  	min = distances[0];
  }
  console.log('Shortest route: ', min);
}

printPaths(nodeA, nodeD);
