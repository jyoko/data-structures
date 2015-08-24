var PrefixTree = function(terminators){

  // by default looks in window.dict for global dictionary
  this.terminators = terminators || window.dict;
  this.trie = this.buildTree();

};

PrefixTree.prototype.lookup = function(symbol){

  if (typeof symbol === 'string') symbol = symbol.split('');
  if (!Array.isArray(symbol)) return 'error - unable to search that value';

  var results = [];
  var stepInto = function(symbols,parent) {
    var c = symbols.shift();
    if (parent.hasOwnProperty(c) && symbols.length>1) {
      return stepInto(symbols,parent[c]);
    } else {
      var curNode = parent[c];
      c = symbols.shift();
      curNode = curNode[c];
      var opts = [];
      for (var key in curNode) {
        if (typeof curNode[key]==='object') opts.push(key);
      }
      return [(curNode.hasOwnProperty('end')),opts];
    }
  };

  return stepInto(symbol,this.trie);
};

PrefixTree.prototype.buildTree = function() {

  node = {value: ''};

  var loadTerminatingArray = function(terminator,parent) {
    var tChar = terminator.shift();
    if (terminator.length===0) return {value: parent.value+tChar,end:true};
    var subNode = (parent.hasOwnProperty(tChar))?parent[tChar]:{value: parent.value+tChar};
    for (var i=0;i<terminator.length;i++) {
      subNode[terminator[0]] = loadTerminatingArray(terminator,subNode);
    }
    return subNode;

  };

  for (var terminator in this.terminators) {
    var terminatingArray = terminator.split('');
    node[terminatingArray[0]] = loadTerminatingArray(terminatingArray,node);
  }

  return node;

};
