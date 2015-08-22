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
  
  obj.breadthFirstLog = function(func, level) {
    var newLevel = [];
    //level = ||[obj]
    if (!level) {
     func(obj.value);
     newLevel.push(obj.left, obj.right);
    }
 //   if (!level[0]) breadthFirstLog(obj.value,[obj.left,obj.right]);
    

    for (var i = 0; i < level.length; i++) {
      func(level[i].value);
      newLevel.push(level[i].left);
      newLevel.push(level[i].right);
    }
    obj.breadthFirstLog(func, newLevel);
    /*
    func(obj.left.value);
    func(obj.right.value);

    func(obj.left.left.value);
    func(obj.left.right.value);
    func(obj.right.left.value);
    func(obj.right.right.value);
*/
  }
  return obj;
};


/*
 * Complexity: What is the time complexity of the above functions?
insert: O(log(n))
contains: O(log(n)) 
depthFirstLog: O(n)
 */
