var BinarySearchTree = function(value) {
  var obj = {};
  obj.value = value;
  obj.left = null;
  obj.right = null;

  obj.insert = function(input) {
    if (input === obj.value) return 'ERROR';
    var side = input < obj.value ? 'left' : 'right';
    if (obj[side]) {
      obj[side].insert(input);
    } else {
      obj[side] = BinarySearchTree(input);
    }
  };

  obj.contains = function(input) {     
    if (obj.value === input) return true; 
    var side = input < obj.value ? 'left' : 'right';
    if (obj[side]) {
      return obj[side].contains(input);
    } else {
      return false;
    }
  };

  obj.depthFirstLog = function(func) {
    func(obj.value);
    if (obj.left) obj.left.depthFirstLog(func);
    if (obj.right) obj.right.depthFirstLog(func);
  };
  
  return obj;
};


/*
 * Complexity: What is the time complexity of the above functions?
insert: O(log(n))
contains: O(log(n)) 
depthFirstLog: O(n)
 */
