describe('prefixTree', function() {
  var prefixTree;

  beforeEach(function() {
    prefixTree = new PrefixTree();
  });

  it('should have access to the dictionary', function() {
    expect(Object.keys(window.dict).length).to.be.above(10000);
  });

  it('should build a trie', function() {
    console.log(prefixTree.trie);
  });

  it('should search a trie', function() {
    console.log(prefixTree.lookup('again'));
  });
});
