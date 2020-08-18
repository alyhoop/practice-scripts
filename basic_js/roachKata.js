/*
The cockroach is one of the fastest insects. Write a function which takes its
speed in km per hour and returns it in cm per second, rounded down to the
integer (= floored).

ex. cockroachSpeed(1.08) == 30
*/

function cockroachSpeed(s) {
  'use strict';
  return Math.floor(s * (100000 / 3600));
}

//Test.describe("Basic Tests", function() {
//   Test.assertEquals(cockroachSpeed(1.08), 30);
//   Test.assertEquals(cockroachSpeed(1.09), 30);
//   Test.assertEquals(cockroachSpeed(0), 0);
// });
