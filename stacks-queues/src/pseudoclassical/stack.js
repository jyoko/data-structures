var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.count = 0;
};


Stack.prototype.push = function(value) {
  this.count++;
  this[this.count] = value;
};

Stack.prototype.pop = function() {
  var result = this[this.count];
  delete this[this.count];
  if (this.count) {
    this.count--;
  }
  return result;
};

Stack.prototype.size = function() {
  return this.count;
};