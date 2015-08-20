var Stack = function() {
  
  var obj = Object.create(stackMethods);
  obj.count = 0;
  return obj;

};

var stackMethods = {
  
  push : function(value) {
    this.count++;
    this[this.count] = value;
  },

  pop : function() {
    var result = this[this.count];
    delete this[this.count];
    if (this.count) {
      this.count--;
    }  
    return result;
  },

  size : function() {
    return this.count;
  }
};


