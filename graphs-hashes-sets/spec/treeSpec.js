describe('tree', function() {
  var tree;

  beforeEach(function() {
    tree = Tree();
  });
  
  it('should execute callback on every value for traverse', function() {
    tree.value = 4;
    tree.addChild(1).addChild(2).addChild(3);
    tree.addChild(4);
    tree.addChild(5).addChild(6);
    var test = [];
    tree.traverse(function(val) { test.push(val); });
    var desiredArray = [4,1,2,3,4,5,6];
    expect(test).to.eql(desiredArray);
  });

  it('should have a parent property', function() {
    expect(tree.parent).to.equal(null);
    tree.addChild(3);
    expect(tree.children[0].parent).to.equal(tree);
  });

  it('should remove parent from both directions when removeFromParent is called', function() {
    var savedChild = tree.addChild(1).addChild(3);
    var removedParent = savedChild.removeFromParent();
    expect(removedParent.value).to.equal(1);
    expect(tree.contains(3)).to.equal(false);
    expect(tree.contains(1)).to.equal(true);
    expect(tree.children[0].children[0]).to.equal(undefined);
    expect(removedParent).to.equal(tree.children[0]);
  });

  it('should have methods named "addChild" and "contains", and a property named "value"', function() {
    expect(tree.addChild).to.be.a("function");
    expect(tree.contains).to.be.a("function");
    expect(tree.hasOwnProperty("value")).to.equal(true);
  });

  it('should add children to the tree', function() {
    tree.addChild(5);
    expect(tree.children[0].value).to.equal(5);
  });

  it('should return true for a value that the tree contains', function(){
    tree.addChild(5);
    expect(tree.contains(5)).to.equal(true);
  });

  it('should return false for a value that was not added', function(){
    tree.addChild(5);
    expect(tree.contains(6)).to.equal(false);
  });

  it('should be able to add children to a tree\'s child', function() {
    tree.addChild(5);
    tree.children[0].addChild(6);
    expect(tree.children[0].children[0].value).to.equal(6);
  });

  it('should correctly detect nested children', function(){
    tree.addChild(5);
    tree.addChild(6);
    tree.children[0].addChild(7);
    tree.children[1].addChild(8);
    expect(tree.contains(7)).to.equal(true);
    expect(tree.contains(8)).to.equal(true);
  });

});
