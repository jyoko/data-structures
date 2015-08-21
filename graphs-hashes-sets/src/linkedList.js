var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var nodeToAdd = Node(value);
    if (list.head === null) {
      list.head = nodeToAdd;
      list.tail = list.head;

    } else {      
      list.tail.next = nodeToAdd;
      list.tail = list.tail.next;
      if (list.head.next===null) {
        list.head.next = list.tail;
      }
    }   
  };

  list.removeHead = function(){
    if ( list.head !== null) {
      var result = list.head.value;
      list.head = list.head.next;
      return result;
    }
  };

  list.contains = function(target){
    var curNode = list.head;
    while ( curNode !== null ) {
      if ( curNode.value === target ) {
        return true;
      }
      curNode = curNode.next;
    }
    return false;
  };

  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 *
 *  addToTail:  O(1)
 *  removeHead: O(1)
 *  contains:   O(n)
 */
