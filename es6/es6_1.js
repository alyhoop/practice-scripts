/*One of the biggest problems with declaring variables with the var keyword
is that you can overwrite variable declarations without an error.*/

let catName;
let quote;
function catTalk() {
  "use strict";

  catName = "Oliver";
  quote = catName + " says Meow!";

}
catTalk();

<!---------------------------------------------------------------------------->
/*When you declare a variable with the var keyword, it is declared globally, or
locally if declared inside a function.

The let keyword behaves similarly, but with some extra features.

 When you declare a variable with the let keyword inside a block,
 statement, or expression, its scope is limited to that block, statement,
 or expression.*/


function checkScope() {
  'use strict';
let i = 'function scope';
  if (true) {
    let i = 'block scope';
    console.log('Block scope i is: ', i);
  }
  console.log('Function scope i is: ', i);
  return i;
}

<!---------------------------------------------------------------------------->
/*The keyword let is not the only new way to declare variables. In ES6, you can
 also declare variables using the const keyword.

const has all the awesome features that let has, with the added bonus that
variables declared using const are read-only. They are a constant value, which
means that once a variable is assigned with const, it cannot be reassigned.

A common practice when naming constants is to use all uppercase letters, with
 words separated by an underscore.*/

 function printManyTimes(str) {
  "use strict";

  // Only change code below this line

  const SENTENCE = str + " is cool!";
  for (let i = 0; i < str.length; i+=2) {
    console.log(SENTENCE);
  }

  // Only change code above this line

}
printManyTimes("freeCodeCamp");
<!---------------------------------------------------------------------------->
