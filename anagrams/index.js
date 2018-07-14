// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {

  //// Using methods for short code
  // let modA = stringA.replace(/\W+/gi, "").toLowerCase().split("").sort().join("");
  // let modB = stringB.replace(/\W+/gi, "").toLowerCase().split("").sort().join("");

  // if(modA === modB) {
  //   return true
  // } else {
  //   return false
  // }

  //// creating character maps and comparing objects
  let modA = stringA.replace(/\W+/gi, "").toLowerCase().split("");
  let modB = stringB.replace(/\W+/gi, "").toLowerCase().split("");
  let aObj = {};
  let bObj = {};
  let aCount = 0;
  let bCount = 0;
  let aMaxEl = modA[0];
  let bMaxEl = modB[0];
  
  for(i=0; i<modA.length; i++) {
    if(!aObj[modA[i]]) {
      aObj[modA[i]] = 1
    } else {
      aObj[modA[i]] ++
    }

    if(aObj[modA[i]] > aCount) {
      aCount = aObj[modA[i]]
      aMaxEl = modA[i]
    }

  }

  for(i=0; i<modB.length; i++) {
    if(!bObj[modB[i]]) {
      bObj[modB[i]] = 1
    } else {
      bObj[modB[i]] ++
    }

    if(bObj[modB[i]] > bCount) {
      bCount = bObj[modB[i]]
      bMaxEl = modB[i]
    }

  }

  
  let aProps = Object.getOwnPropertyNames(aObj)
  let bProps = Object.getOwnPropertyNames(bObj)

  if(aProps.length !== bProps.length) {
    return false
  }

  for(i=0; i<aProps.length; i++) {
    if(aObj[aProps[i]] !== bObj[aProps[i]]) {
      return false
    } else {
      return true
    }
  }

}

module.exports = anagrams;
