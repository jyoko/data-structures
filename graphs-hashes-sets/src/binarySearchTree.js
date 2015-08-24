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
    obj.balance();
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


  
  obj.traverseInOrder = function(node, func) {
    if (node === null) return;
    obj.traverseInOrder(node.left, func); 
    func(node.value);
    obj.traverseInOrder(node.right, func);
  };
  
  

  obj.breadthFirstLog = function(func) {
    // Recursion:
    var min;
    var count = 0;
    if (!func) {
      func = function() {};
    }
    var countLevels = function(level) {
      var newLevel = [];
      var level = level || [obj];
      count++;
      for (var i = 0; i < level.length; i++) {
        func(level[i].value);

        if (level[i].left) newLevel.push(level[i].left);
        if (level[i].right) newLevel.push(level[i].right);
        if (level[i].left === null && level[i].right === null && min === undefined) {
          min = count;
        }
      }

      if(newLevel.length>0) countLevels(newLevel);

    };  
    countLevels();
 //   console.log(min);
   // console.log(count);
    /*  Queue:
        var queue = new Queue;
        queue.enqueue(obj);
        while (!queue.isEmpty()) {
          var current = queue.dequeue();
          func(current);
          queue.enqueue(current.left);
          queue.enqueue(current.right);
        }
    */
    // force rebalance only after 3 levels deep
    return (count-1 < 4) ? 0 : Math.floor(count/min);
  };

  obj.balance = function(orderedNodes) {

    if (!orderedNodes) {
      if (obj.breadthFirstLog() < 2) return obj;
      orderedNodes = [];
      obj.traverseInOrder(obj,function(val) { orderedNodes.push(val); });
    }
    
    var middle = Math.floor(orderedNodes.length / 2);
    obj = BinarySearchTree(orderedNodes[middle]);
    if (middle !== 1) {
      var l = orderedNodes.slice(0,middle);
      var r = orderedNodes.slice(middle + 1, orderedNodes.length);
      obj.left = obj.balance(l);
      obj.right = obj.balance(r);
    } else {
      obj.left = (orderedNodes[0])?BinarySearchTree(orderedNodes[0]):null;
      obj.right = (orderedNodes[2])?BinarySearchTree(orderedNodes[2]):null;
    }
    console.log(obj);
    return obj;
  };

  return obj;
};


/*
 * Complexity: What is the time complexity of the above functions?
insert: O(log(n))
contains: O(log(n)) 
depthFirstLog: O(n)
 */
