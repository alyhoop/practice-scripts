function deleteNth(arr,n){
  var results = [];

  for (var i = 0; i < arr.length; i++) {
    if (count(results, arr[i]) < n){
    results.push(arr[i]);
  }
}
return results;
}

function count(array, what){
  var count =0;
  for (var i=0; i<array.length; i++){
    if (array[i]===what){
      count++;
    }
  }
  return count;
}

<!--------------------------- Task ------------------------------------>
Given a list lst and a number N, create a new list that contains each number of
lst at most N times without reordering. For example if N = 2, and the input is
[1,2,3,1,2,1,2,3], you take [1,2,3,1,2], drop the next [1,2] since this would
lead to 1 and 2 being in the result 3 times, and then take 3, which leads to
 [1,2,3,1,2,3].
