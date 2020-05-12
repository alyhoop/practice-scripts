//Write a recursive function, sum(arr, n), that returns the sum of the
// first n elements of an array arr.
//
function sum(arr, n) {
  // Only change code below this line
if (n <= 0) {
  return 0;
} else {
  return sum(arr, n - 1) + arr[n - 1];
}
  // Only change code above this line
}
<!---------------------------------------------------------------------->
//Recursion practice
//
function re(i) {
  if (i <= 0){
    return 0;
  } else {
    re(i-1);
    console.log(i);
  }
}

re(3);
<!---------------------------------------------------------------------->
//Recursion practice
//


function re0(i) {
  if (i <= 0){
    console.log(i);
  } else {
    console.log(i);
    window['re' + (i - 1)](i-1);
    console.log(i);
  }
}

function re1(i) {
  if (i <= 0){
    console.log(i);
  } else {
    console.log(i);
    re0(i-1);
    console.log(i);
  }
}

function re2(i) {
  if (i <= 0){
    console.log(i);
  } else {
    console.log(i);
    re1(i-1);
    console.log(i);
  }
}

function re3(i) {
  if (i <= 0){
    console.log(i);
  } else {
    console.log(i);
    re2(i-1);
    console.log(i);
  }
}

function re4(i) {
  if (i <= 0){
    console.log(i);
  } else {
    console.log(i);
    re3(i-1);
    console.log(i);
  }
}

function re5(i) {
  if (i <= 0){
    console.log(i);
  } else {
    console.log(i);
    re4(i-1);
    console.log(i);
  }
}

function re6(i) {
  if (i <= 0){
    console.log(i);
  } else {
    console.log(i);
    re5(i-1);
    console.log(i);
  }
}


function re7(i) {
  if (i <= 0){
    console.log(i);
  } else {
    console.log(i);
    re6(i-1);
    console.log(i);
  }
}

function re8(i) {
  if (i <= 0){
    console.log(i);
  } else {
    console.log(i);
    re7(i-1);
    console.log(i);
  }
}

function re9(i) {
  if (i <= 0){
    console.log(i);
  } else {
    console.log(i);
    re8(i-1);
    console.log(i);
  }
}

function re(i) {
  if (i <= 0){
    console.log(i);
  } else {
    console.log(i);
    re9(i-1);
    console.log(i);
  }
}

function re(i) {
  if (i <= 0){
    console.log(i);
  } else {
    console.log(i);
    re(i-1);
    console.log(i);
  }
}

re(10);
