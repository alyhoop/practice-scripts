function longestRepetition(s) {
  if (s.length === 0) { return ['', 0] }

  var chars       = s.split('')
  var last_char   = null
  var run_length  = 1
  var longest_run = [chars[0], 1]

  for (var i = 0; i < chars.length; i++) {
    if (chars[i] === last_char) {
      run_length++
      if (run_length > longest_run[1]) { longest_run = [chars[i], run_length] }
    } else {
      run_length = 1
    }
    last_char = chars[i]
  }

  return longest_run
}

/* Tests

Test.describe("Longest repetition", ()=>{
  Test.it("Example tests", function(){
    Test.assertDeepEquals( longestRepetition("aaaabb"),      ["a",4] );
    Test.assertDeepEquals( longestRepetition("bbbaaabaaaa"), ["a",4] );
    Test.assertDeepEquals( longestRepetition("cbdeuuu900"),  ["u",3] );
    Test.assertDeepEquals( longestRepetition("abbbbb"),      ["b",5] );
    Test.assertDeepEquals( longestRepetition("aabb"),        ["a",2] );
    Test.assertDeepEquals( longestRepetition(""),             ["",0] );
  });
});

 */
