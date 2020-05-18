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
 declaration only prevents reassignment of the variable identifier. */

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
/*ES6 introduced default parameters for functions. */

// Only change code below this line
const increment = (number, value = 1) => number + value;
// Only change code above this line
<!---------------------------------------------------------------------------->
/* ES6 introduced rest parameters. These allow us to accept infinite arguments
as an array*/

//without rest parameter
const sum = (x, y, z) => {
  const args = [x, y, z];
  return args.reduce((a, b) => a + b, 0);
}
//with rest parameter
const sum = (...args) => {
  return args.reduce((a, b) => a + b, 0);
}
<!---------------------------------------------------------------------------->
/*ES6 introduces the spread operator, which allows us to expand arrays and
other expressions in places where multiple parameters or elements are expected.
*/
*
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2 = [...arr1];  // Change this line

console.log(arr2);

<!---------------------------------------------------------------------------->
/*Destructuring assignment is special syntax introduced in ES6, for neatly
assigning values taken directly from an object.*/

const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};

// Only change code below this line
// BEFORE:
// const today = HIGH_TEMPERATURES.today;
// const tomorrow = HIGH_TEMPERATURES.tomorrow;
//

const {today} = HIGH_TEMPERATURES;
const {tomorrow} = HIGH_TEMPERATURES;

// Only change code above this line
<!---------------------------------------------------------------------------->
/*Destructuring allows you to assign a new variable name when extracting values.
 You can do this by putting the new name after a colon when assigning the value.
 */

 const HIGH_TEMPERATURES = {
   yesterday: 75,
   today: 77,
   tomorrow: 80
 };

 // Only change code below this line

 const {today: highToday} = HIGH_TEMPERATURES;
 const {tomorrow: highTomorrow} = HIGH_TEMPERATURES;

 // Only change code above this line

 <!---------------------------------------------------------------------------->
/*You can use the same principles from the previous two lessons to destructure
 values from nested objects.*/

 const LOCAL_FORECAST = {
  yesterday: { low: 61, high: 75 },
  today: { low: 64, high: 77 },
  tomorrow: { low: 68, high: 80 }
};

// Only change code below this line

const {today: {low: lowToday}} = LOCAL_FORECAST;
const {today: {high: highToday}} = LOCAL_FORECAST;

// Only change code above this line
<!---------------------------------------------------------------------------->
/*ES6 makes destructuring arrays as easy as destructuring objects.*/

let a = 8, b = 6;
// Only change code below this line
[a, b] = [b, a];

console.log(b);
console.log(a);

<!---------------------------------------------------------------------------->
/*In some situations involving array destructuring, we might want to collect
 the rest of the elements into a separate array.*/

 const source = [1,2,3,4,5,6,7,8,9,10];
 function removeFirstTwo(list) {
   "use strict";
   // Only change code below this line
   const [a, b, ...arr] = list; // Change this line
   // Only change code above this line
   return arr;
 }
 const arr = removeFirstTwo(source);


 <!---------------------------------------------------------------------------->
 //In some cases, you can destructure the object in a function argument itself.


 const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};

// Only change code below this line
const half = ({max, min}) => (max + min) / 2.0;
// Only change code above this line

<!---------------------------------------------------------------------------->
/*A new feature of ES6 is the template literal. This is a special type of
string that makes creating complex strings easier.*/
