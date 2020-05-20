/*Regex literal matches*/
let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex.test(myString); // Change this line

<!---------------------------------------------------------------------------->
/*Regex literal matches*/

let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
let waldoRegex = /Waldo/; // Change this line
let result = waldoRegex.test(waldoIsHiding);

<!---------------------------------------------------------------------------->
/*Regex and || */

let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/; // Change this line
let result = petRegex.test(petString);

<!---------------------------------------------------------------------------->
/*Regex and ignoring cases*/

let myString = "freeCodeCamp";
let fccRegex = /freeCodeCamp/i; // Change this line
let result = fccRegex.test(myString);

<!---------------------------------------------------------------------------->
/*Check if pattern exists & extracting Matches*/

let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/; // Change this line
let result = extractStr.match(codingRegex); // Change this line

<!---------------------------------------------------------------------------->
/*Search a pattern more than once*/

let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /twinkle/gi; // Change this line
let result = twinkleStar.match(starRegex); // Change this line

<!---------------------------------------------------------------------------->
/*Wildcard*/

let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /run|sun|fun|pun|nun|bun./; // Change this line
let result = unRegex.test(exampleStr);

<!---------------------------------------------------------------------------->
/*Character classes*/

let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/gi; // Change this line
let result = quoteSample.match(vowelRegex); // Change this line

<!---------------------------------------------------------------------------->
/*Character sets*/

let quoteSample = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[A-Z]/gi; // Change this line
let result = quoteSample.match(alphabetRegex); // Change this line

<!---------------------------------------------------------------------------->
/*Matching numbers and letters*/

let quoteSample = "Blueberry 3.141592653s are delicious.";
let myRegex = /[h-s2-6]/ig; // Change this line
let result = quoteSample.match(myRegex); // Change this line

<!---------------------------------------------------------------------------->
/*Matching characters*/

let quoteSample = "3 blind mice.";
let myRegex = /[^aeiou0-9]/ig; // Change this line
let result = quoteSample.match(myRegex); // Change this line

<!---------------------------------------------------------------------------->
/*Characters that occur more than once*/

let difficultSpelling = "Mississippi";
let myRegex = /s+/g; // Change this line
let result = difficultSpelling.match(myRegex);

<!---------------------------------------------------------------------------->
/*Matches for zero or more times*/

// Only change code below this line
let chewieRegex = /Aa*/; // Change this line
// Only change code above this line

let result = chewieQuote.match(chewieRegex);

<!---------------------------------------------------------------------------->
/*Greedy vs Lazy Matching*/

let text = "<h1>Winter is coming</h1>";
let myRegex = /<.*?>/; // Change this line
let result = text.match(myRegex);

<!---------------------------------------------------------------------------->
/*Test Regex*/

let str = "P6P2P7P4P5CCCCCP3P1"
let reCriminals = /C+/; // Change this line

let criminals = str.match(reCriminals);
console.log(criminals);

<!---------------------------------------------------------------------------->
/*Beginning String Patterns*/

let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/; // Change this line
let result = calRegex.test(rickyAndCal);

<!---------------------------------------------------------------------------->
/*Ending string patterns*/

let caboose = "The last car on a train is the caboose";
let lastRegex = /caboose$/; // Change this line
let result = lastRegex.test(caboose);

<!---------------------------------------------------------------------------->
/*Match all letters and numbers*/

let quoteSample = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/g; // Change this line
let result = quoteSample.match(alphabetRegexV2).length;

<!---------------------------------------------------------------------------->
/*Matching non-alphabetic numbers*/

let quoteSample = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /\W/g; // Change this line
let result = quoteSample.match(nonAlphabetRegex).length;

<!---------------------------------------------------------------------------->
/*Matching numbers*/

let movieName = "2001: A Space Odyssey";
let numRegex = /\d/g; // Change this line
let result = movieName.match(numRegex).length;

<!---------------------------------------------------------------------------->
/*Matching all non-numbers*/

let movieName = "2001: A Space Odyssey";
let noNumRegex = /\D/g; // Change this line
let result = movieName.match(noNumRegex).length;

<!---------------------------------------------------------------------------->
/*Username search
1) Usernames can only use alpha-numeric characters.

2) The only numbers in the username have to be at the end. There can be zero or
 more of them at the end. Username cannot start with the number.

3) Username letters can be lowercase and uppercase.

4) Usernames have to be at least two characters long. A two-character username
can only use alphabet letters as characters.

*/

let username = "Jack";
let userCheck = /^[a-z]([0-9]{2,}|[a-z]+\d*)$/i; // Change this line
let result = userCheck.test(username);

<!---------------------------------------------------------------------------->
/*Space match or non-whitespace match*/

let sample = "Whitespace is important in separating words";
let countWhiteSpace = /\s+/g; // Change this line
let result = sample.match(countWhiteSpace);

let sample = "Whitespace is important in separating words";
let countNonWhiteSpace = /\S/g; // Change this line
let result = sample.match(countNonWhiteSpace);

<!---------------------------------------------------------------------------->
/*Quantity matches*/

let ohStr = "Ohhh no";
let ohRegex = /(oh{3,6})\s(no)/gi; // Change this line
let result = ohRegex.test(ohStr);

let haStr = "Hazzzzah";
let haRegex = /(Haz{4,}ah)/; // Change this line
let result = haRegex.test(haStr);

let timStr = "Timmmmber";
let timRegex = /tim{4}ber/i; // Change this line
let result = timRegex.test(timStr);

<!---------------------------------------------------------------------------->
/*Partial matches*/

let favWord = "favorite";
let favRegex = /favou?rite/; // Change this line
let result = favRegex.test(favWord);

<!---------------------------------------------------------------------------->
/*Use lookaheads in the pwRegex to match passwords that are greater than 5
characters long, do not begin with numbers, and have two consecutive digits.*/

let sampleWord = "astronaut";
let pwRegex = /^\D(?=\w{5})(?=\w*\d{2})/; // Change this line
let result = pwRegex.test(sampleWord);
