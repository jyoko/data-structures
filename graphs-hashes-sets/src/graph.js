

// ###Graph Solution

// Instantiate a new graph
var Graph = function(){


};

// ------------------------
// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node){
  this[node] = {};
  this[node].edges = {};
};

// ------------------------
// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node){
  return (this.hasOwnProperty(node));
};

// ------------------------
// Removes a node from the graph.
Graph.prototype.removeNode = function(node){
  delete this[node];
};

// ------------------------
// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode){
  if ( this[fromNode].edges.hasOwnProperty(toNode) && this[toNode].edges.hasOwnProperty(fromNode) ) {
    return true;
  }
  return false;
};

// ------------------------
// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode){
  this[fromNode].edges[toNode] = true;
  this[toNode].edges[fromNode] = true;
};

// ------------------------
// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode){
  delete this[fromNode].edges[toNode];
  delete this[toNode].edges[fromNode];
};

// ------------------------
// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb){
};

/*
 * Complexity: What is the time complexity of the above functions?
 */



