// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  strSplit = str.split('');
  newObj = {};
  count = 1;
  let maxEl = strSplit[0]

  for(i=0; i<strSplit.length; i++) {
   if(!newObj[strSplit[i]]) {
     newObj[strSplit[i]] = 1
   } else {
     newObj[strSplit[i]] ++
   }
   // if(newObj[strSplit[i]] > count) {
   //   count = newObj[strSplit[i]]
   //   maxEl = strSplit[i]
   // }
  }

  for (let i in newObj) {
    if(newObj[i] > count) {
      count = newObj[i]
      maxEl = i
    } 
  }

  return maxEl;
}

module.exports = maxChar;
