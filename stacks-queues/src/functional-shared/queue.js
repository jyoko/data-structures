var Queue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var obj = {};
  obj.start = 0;
  obj.end = 0;
  _.extend(obj,queueMethods);
  return obj;

};

var queueMethods = {

  dequeue: function() {
    if ( this.end-this.start ) {
      var result = this[this.start];
      delete this[this.start];
      this.start++;
      return result;
    }
  },

  enqueue: function(value) {    
    this[this.end] = value;
    this.end++;
  },

  size: function() {
    return this.end-this.start;
  }

};


