var Stack = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var count = 0;
  
  // Implement the methods below
  someInstance.push = function(value){
    count++;
    storage[count] = value;
  };

  someInstance.pop = function(){
    var result = storage[count];
    delete storage[count];
    if (count) {
      count--;
    }  
    return result;
  };

  someInstance.size = function(){
    return count;
  };
  
  return someInstance;
};
