describe('doublyLinkedList', function() {
  var list;
 // console.log(list);
  beforeEach(function() {
    list = DoublyLinkedList();
 //   console.log(list);
  });

  it('should have a head and previous and tail', function() {
    expect(list).to.have.property("head");
    expect(list).to.have.property("tail");
  });

  it('should have methods named "addToTail", "removeHead", "contains", "addToHead", and "removeTail"', function() {
    expect(list.addToTail).to.be.a("function");
    expect(list.removeHead).to.be.a("function");
    expect(list.contains).to.be.a("function");
    expect(list.addToHead).to.be.a("function");
    expect(list.removeTail).to.be.a("function");
  });

  it('should have a new head when new nodes are added', function(){
    list.addToHead(4);
    expect(list.head.value).to.equal(4);
    list.addToHead(5);
    expect(list.head.value).to.equal(5);
  });

  it('should designate a new tail when new nodes are added', function(){
    list.addToTail(4);
    expect(list.tail.value).to.equal(4);
    list.addToTail(5);
    expect(list.tail.value).to.equal(5);
  });

  it('should remove the head from the list when removeHead is called', function(){
    list.addToTail(4);
    list.addToTail(5);
    expect(list.head.value).to.equal(4);
    list.removeHead();
    expect(list.head.value).to.equal(5);
  });

  it("should return the value of the former head when removeHead is called", function(){
    list.addToTail(4);
    expect(list.removeHead()).to.equal(4);
  });

  it("should return the value of the former tail when removeTail is called", function() {
    list.addToHead(4);
    expect(list.removeTail()).to.equal(4);
  });

  it('should remove the tail from the list when removeTail is called', function() {
    list.addToHead(4);
    list.addToHead(5);
    expect(list.tail.value).to.equal(4);
    list.removeTail();
    expect(list.tail.value).to.equal(5);
  });

  it("should contain a value that was added", function(){
    list.addToTail(4);
    list.addToTail(5);
    expect(list.contains(4)).to.equal(true);
    expect(list.contains(5)).to.equal(true);
    expect(list.contains(6)).to.equal(false);
    list.addToHead(6);
    list.addToHead(7);
    expect(list.contains(6)).to.equal(true);
    expect(list.contains(7)).to.equal(true);
    expect(list.contains(8)).to.equal(false);
  });

  it('should not contain a value that was removed', function(){
    list.addToTail(4);
    list.addToTail(5);
    list.removeHead();
    expect(list.contains(4)).to.equal(false);
    list.addToHead(6);
    list.addToHead(7);
    list.removeTail();
    expect(list.contains(5)).to.equal(false);
  });

  // add more tests here to test the functionality of list
});
