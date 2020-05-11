// Setup
var myArray = [];

// Only change code below this line
var i = 5;
while (i > -1) {
  myArray.push(i);
  i--;
}

<!--------------------------------------------------------------------------->

// Setup
var myArray = [];

// Only change code below this line

for (var i = 1; i < 6; i++) {
  myArray.push(i);
}

<!--------------------------------------------------------------------------->

// Setup
var myArray = [];

// Only change code below this line
for  (var i = 1; i < 10; i +=2){
  myArray.push(i);
}
<!--------------------------------------------------------------------------->

// Setup
var myArray = [];

// Only change code below this line
for (var i = 9; i > 0; i -= 2){
  myArray.push(i);
}
<!--------------------------------------------------------------------------->

// Setup
var myArr = [ 2, 3, 4, 5, 6];

// Only change code below this line
var total = 0;
for (var i = 0; i < myArr.length; i++){
  total = total + myArr[i];
  //total += myArr[i];
}
<!--------------------------------------------------------------------------->

function multiplyAll(arr) {
  var product = 1;
  // Only change code below this line
for (var i=0; i < arr.length; i++){
  for (var j=0; j <arr[i].length; j++) {
    product = product * arr[i][j];
  }
}
  // Only change code above this line
  return product;
}

multiplyAll([[1,2],[3,4],[5,6,7]]);

<!--------------------------------------------------------------------------->
