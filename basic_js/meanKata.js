function getAverage(marks){
   var total = 0, i;
    for (i = 0; i < marks.length; i += 1) {
        total += marks[i];
    }
    return Math.floor(total / marks.length);
}

/*
Tests


Test.assertEquals(getAverage([2,2,2,2]),2);
Test.assertEquals(getAverage([1,2,3,4,5,]),3);
Test.assertEquals(getAverage([1,1,1,1,1,1,1,2]),1);


 */
