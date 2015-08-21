var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  if (!this._storage.get(i)) {
    this._storage.set(i,[]);
  }  
  for (var j=0,val=this._storage.get(i);j<val.length;j++) {
    if (val[j][0]===k) {
      val[j][1] = v;
    }
  }
  this._storage.get(i).push([k,v]);
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var tuples = this._storage.get(i);
  for (var j=0;j<tuples.length;j++) {
    if (tuples[j][0] === k) {
      return tuples[j][1];
    }
  }
  return null;
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  for (var j=0,val=this._storage.get(i);j<val.length;j++) {
    if (val[j][0]===k) {
      val[j][0] = null;
      val[j][1] = null;
    }
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
