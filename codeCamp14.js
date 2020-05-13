function randomFraction() {

  // Only change code below this line

  return Math.random();

  // Only change code above this line
}
<!--------------------------------------------------------------------------->

var randomNumberBetween0and19 = Math.floor(Math.random() * 20);

function randomWholeNum() {

  // Only change code below this line
return Math.floor(Math.random() * 10);
}

<!--------------------------------------------------------------------------->
function randomRange(myMin, myMax) {
  // Only change code below this line

  return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
  // Only change code above this line
}
<!--------------------------------------------------------------------------->
function convertToInteger(str) {
 return parseInt(str);
}

convertToInteger("56");
<!--------------------------------------------------------------------------->
function convertToInteger(str) {
 return parseInt(str, 2);
}

convertToInteger("10011");
<!--------------------------------------------------------------------------->
