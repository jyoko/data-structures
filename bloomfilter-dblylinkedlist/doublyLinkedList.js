var DoublyLinkedList = function(){
  var list  = {};
  list.head = null;
  list.tail = null;

  list.addToHead = function(value) {
    var nodeToAdd = Node(value);
    if (list.head === null) {
      list.head = nodeToAdd;
      list.tail = list.head;
    } else {
      var temp = list.head;
      list.head = nodeToAdd;
      temp.previous = list.head;
      list.head.next = temp;
    }
  };

  list.addToTail = function(value){
    var nodeToAdd = Node(value);
    if (list.head === null) {
      list.head = nodeToAdd;
      list.tail = list.head;
    } else {      
      nodeToAdd.previous = list.tail;
      list.tail.next = nodeToAdd;
      list.tail = list.tail.next;
      if (list.head.next===null) {
        list.head.next = list.tail;
        list.tail.previous = list.head;
      }
    }   
  };

  list.removeHead = function(){
    if ( list.head !== null) {
      var result = list.head.value;
      if (list.head.next) {
        list.head = list.head.next;
      }
      list.head.previous = null;
      return result;
    }
  };

  list.removeTail = function() {
    if ( list.tail !== null) {
      var result = list.tail.value;
      if (list.tail.previous) {
        list.tail = list.tail.previous;
      }
      list.tail.next = null;
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

  node.value    = value;
  node.next     = null;
  node.previous = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
