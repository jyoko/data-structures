var Queue = function() {
  var obj = Object.create(queueMethods);
  obj.start = 0;
  obj.end = 0;
  return obj;
};

var queueMethods = {
  enqueue : function(value) {
    this[this.end] = value;
    this.end++;
  },

  dequeue : function() {
    if (this.end - this.start) {
      var result = this[this.start];
      delete this[this.start];
      this.start++;
      return result;
    }  
  },

  size : function() {
    return this.end - this.start;
  }
};


