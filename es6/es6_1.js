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
  "use strict"; //throws an error with undeclared variables

  // Only change code below this line

  const SENTENCE = str + " is cool!";
  for (let i = 0; i < str.length; i+=2) {
    console.log(SENTENCE);
  }

  // Only change code above this line

}
printManyTimes("freeCodeCamp");
<!---------------------------------------------------------------------------->
/* However, it is important to understand that objects (including arrays and
functions) assigned to a variable using const are still mutable. Using the const
 declaration only prevents reassignment of the variable identifier.*/

 const s = [5, 7, 2];
function editInPlace() {
  'use strict';
  // Only change code below this line
  s.unshift(s.pop());
  // Using s = [2, 5, 7] would be invalid

  // Only change code above this line
}
editInPlace();
<!---------------------------------------------------------------------------->
/*As seen in the previous challenge, const declaration alone doesn't really
protect your data from mutation. To ensure your data doesn't change, JavaScript
 provides a function Object.freeze to prevent data mutation.*/

 function freezeObj() {
  'use strict';
  const MATH_CONSTANTS = {
    PI: 3.14
  };
  // Only change code below this line
Object.freeze(MATH_CONSTANTS);

  // Only change code above this line
  try {
    MATH_CONSTANTS.PI = 99;
  } catch(ex) {
    console.log(ex);
  }
  return MATH_CONSTANTS.PI;
}
const PI = freezeObj();
<!---------------------------------------------------------------------------->
/*Arrow functions allow us to write concise anonymous functions. Arrow functions
will accept parameters. */

const magic = () => new Date();
<!---------------------------------------------------------------------------->
/*Arrow functions will accept parameters. If an arrow function has a single
argument, the parentheses enclosing the argument may be omitted. It is possible
to pass more than one argument into an arrow function.*/


const myConcat = (arr1, arr2) => arr1.concat(arr2);

console.log(myConcat([1, 2], [3, 4, 5]));
<!---------------------------------------------------------------------------->
