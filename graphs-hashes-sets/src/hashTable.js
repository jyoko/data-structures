var HashTable = function(){
  this._limit = 8;
  this._count = 0;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  if (!this._storage.get(i)) {
    this._storage.set(i,[]);
  }
  var tuples = this._storage.get(i);
  for (var j=0; j<tuples.length; j++) {
    if (tuples[j][0]===k) {
      tuples[j][1] = v;
      return;
    }
  }
  this._storage.get(i).push([k,v]);
  this._count++;
  if (this._count > Math.floor(this._limit*0.75)) {
    this.resize((this._limit*2));
  }
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
  var tuples = this._storage.get(i);
  for (var j=0; j<tuples.length;j++) {
    if (tuples[j][0]===k) {
      tuples.splice(j, 1);
      this._count--;
      if (this._count && this._count < Math.ceil(this._limit*0.25)) {
        this.resize((this._limit/2));
      }
      break;
    }
  }
};

HashTable.prototype.resize = function(size) {

  this._limit = Math.floor(size);
  this._count = 0;
  var tempStorage = this._storage;
  this._storage = LimitedArray(this._limit);
  tempStorage.each((function(tupleArray) {
    if (tupleArray) {
      for (var j=0;j<tupleArray.length;j++) {
          this.insert(tupleArray[j][0],tupleArray[j][1]);
      }
    }
  }).bind(this));

};

/*
 * Complexity: What is the time complexity of the above functions?
 insert: O(1)
 retrieve: O(1)
 remove: O(1)
 */
