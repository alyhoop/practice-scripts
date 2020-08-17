function solution(nums){
  if (nums === null) {
    return []
  } else {
    return nums.sort(nums.sort((a, b) => a - b)
  }
}

//Test
describe("Solution", function() {
  it("should test for something", function() {
    Test.assertEquals(1 + 1, 2);
    assert.strictEqual(1 + 1, 2);
  });
});
