// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
 //// the iterative solution
 //  x = str.toLowerCase().split("");
 //  vowelArr = [];
 //  for(i=0; i<x.length; i++) {
 //    if (x[i] === 'a'||x[i] === 'e'||x[i] === 'i'||x[i] === 'o'||x[i] === 'u') {
 //      vowelArr.push(x[i])
 //    }
 //  }
	// return vowelArr.length;

 //// the regex solution
  vowels = str.match(/[aeiou]/gi)
  if(vowels === null) {
    return 0
  } else {
    return vowels.length
  }
}

module.exports = vowels;
