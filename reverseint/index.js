// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
   numString = n.toString();
  numStringRev = '';
  for(i=numString.length-1; i>=0; i--) {
    numStringRev += numString[i]
  }
  numRev = parseInt(numStringRev);
  if(n < 0){
    numRev *= -1
  }
  return numRev
}

module.exports = reverseInt;
