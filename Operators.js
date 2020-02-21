//Primitive Data Types & Operators Coding Challenge

function greaterThanLessThan (a,b,c) {
  return a < b < c;
}

//Tests
Test.assertEquals(greaterThanLessThan(Number(null), 0, 1),true);
Test.assertEquals(greaterThanLessThan(700000000001, 700000000002, -1),false);
Test.assertEquals(greaterThanLessThan(-9, -8, 7),true);
Test.assertEquals(greaterThanLessThan(-9, -8, -7),false);
