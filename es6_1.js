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
