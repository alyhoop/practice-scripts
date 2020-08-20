//Write a function that returns a sequence (index begins with 1) of all the even
//characters from a string. If the string is smaller than two characters or
//longer than 100 characters, the function should return "invalid string".

function evenChars(str) {
  if (str.length > 100 || str.length < 2) {
    return "invalid string";
    } else {
      return str.split('').filter((char, i) => i % 2 !== 0);
    }
}

// //Test
// Test.assertSimilar(evenChars ("a"), "invalid string")
// Test.assertSimilar(evenChars ("abcdefghijklm"), ["b", "d", "f", "h", "j", "l"])
