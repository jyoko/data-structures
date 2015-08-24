describe('bloomFilter', function() {
  var bloomFilter;

  beforeEach(function() {
    bloomFilter = BloomFilter();
  });

  it('should have methods named "add", "contains", and "remove"', function() {
    expect(bloomFilter.add).to.be.a("function");
    expect(bloomFilter.contains).to.be.a("function");
    expect(bloomFilter.remove).to.be.a("function");
  });

  it('should add values to a bloomFilter', function(){
    bloomFilter.add("Susan Sarandon");
    bloomFilter.add("Danny Glover");
    bloomFilter.add(1);
    bloomFilter.add(2);
    bloomFilter.add([1,2,3]);
    bloomFilter.add({});
    bloomFilter.add(false);
    expect(bloomFilter.contains('Danny Glover')).to.equal(true);
    expect(bloomFilter.contains('Susan Sarandon')).to.equal(true);
    expect(bloomFilter.contains(1)).to.equal(true);
    expect(bloomFilter.contains(2)).to.equal(true);
    expect(bloomFilter.contains([1,2,3])).to.equal(true);
    expect(bloomFilter.contains({})).to.equal(true);
    expect(bloomFilter.contains(false)).to.equal(true);
  });

  it('should remove values from a bloomFilter', function(){
    bloomFilter.add("Mel Gibson");
    bloomFilter.remove("Mel Gibson");
    expect(bloomFilter.contains("Mel Gibson")).to.equal(false);
    bloomFilter.add(1);
    bloomFilter.remove(1);
    expect(bloomFilter.contains(1)).to.equal(false);
    bloomFilter.add([1,2,3]);
    bloomFilter.remove([1,2,3]);
    expect(bloomFilter.contains([1,2,3])).to.equal(false);
    bloomFilter.add({});
    bloomFilter.remove({});
    expect(bloomFilter.contains({})).to.equal(false);
    bloomFilter.add(false);
    bloomFilter.remove(false);
    expect(bloomFilter.contains(false)).to.equal(false);
  });

  it('should have an appropriate false positive rate', function(){

    var testString = 'the quick brown fox jumped over the lazy dog';
    var test;
    var falsePositive = [];
    // number of inserts
    var n = 10000;
    // sample/remove every s'th insert
    var s = 20;
    for (var i=0;i<n;i++) {
      test = testString+i.toString();
      bloomFilter.add(test);
      // Every s'th value, remove and store
      if (i%s===0) {
        bloomFilter.remove(test);
        falsePositive.push(test);
      }
    }
    // Check bloomFilter for false positives
    var falseCount = 0;
    for (i=0;i<falsePositive.length;i++) {
      if ( bloomFilter._filter.hasOwnProperty(bloomFilter.bloomHash(falsePositive[i])) ) falseCount++;
    }

    // for (1-e^(-kn/m))^k (using k=3 hashes, m=18 bits, n=10000 per README)
    // n changes per samples removed
    var n_actual = n-(n/s);
    var ratio = Math.pow(1-Math.pow(2.718,(-3*n_actual)/18),3);
    var expected = Math.floor(ratio*falsePositive.length);
    // Uncomment below to check actual vs expected
    // Basically expect 100% failure rate for given default values
    //console.log(falseCount+' versus '+expected);

    expect(falseCount).to.be.below(expected);
  });

});
