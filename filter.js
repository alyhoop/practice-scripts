//Implementing a filter function

Array.prototype.filter = function(el) {
  var filtered = [];
  for(let i = 0; i < this.length; i++) {
    if (el(this[i], i, this)) filtered.push(this[i]);
  }
  return filtered;
};

Test.assertSimilar([1,2,3,4].filter((num)=>{ return num > 3}), [4])
