var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.start = 0;
  this.end = 0;
};

Queue.prototype.dequeue = function() {
  if (this.end-this.start) {
    var result = this[this.start];
    delete this[this.start];
    this.start++;
    return result;
  }
};

Queue.prototype.enqueue = function(value) {
  this[this.end] = value;
  this.end++;
};

Queue.prototype.size = function() {
  return this.end-this.start;
};
