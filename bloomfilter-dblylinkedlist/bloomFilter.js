var BloomFilter = function(){
  var bloomFilter = Object.create(bloomFilterPrototype);
  bloomFilter._storage = {};
  bloomFilter._filter = {};
  bloomFilter._filterMax = 18;
  return bloomFilter;
};

var bloomFilterPrototype = {};

bloomFilterPrototype.add = function(item){
  this._filter[this.bloomHash(item)] = true;
  this._storage[item] = true;
};

bloomFilterPrototype.contains = function(item){
  if ( !this._filter.hasOwnProperty(this.bloomHash(item)) ) return false;
  return !!this._storage[item];
};

bloomFilterPrototype.remove = function(item){
  delete this._filter[this.bloomHash(item)];
  this._storage[item] = false;
};

bloomFilterPrototype.bloomHash = function(item) {

  var check = new Array(this._filterMax+1).join('0').split('');
  var c = simpleHash(item, this._filterMax);
  check[c] = 1;
  c = simpleHash(item, this._filterMax,4);
  check[c] = 1;
  c = simpleHash(item, this._filterMax,6);
  check[c] = 1;
  return check.join('');

}

var simpleHash = function(str, max, bitshift){
  var hash = 0;
  bitshift = bitshift || 5
  str = str.toString();
  for (var i = 0; i < str.length; i++) {
    hash = (hash<<bitshift) + hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  return hash % max;
};

/*
 * Complexity: What is the time complexity of the above functio
 add: O(1)
 contains: O(1)
 remove: O(1)
 */
