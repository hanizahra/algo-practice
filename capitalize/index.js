// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  // let stringArr = str.split(" ")
  // let newArr = []
  // for(i=0; i<stringArr.length; i++) {
  //   newArr.push(stringArr[i][0].toUpperCase() + stringArr[i].slice(1));
  // }
  // return newArr.join(" ")

  newString = str[0].toUpperCase();
  for(i=1; i<str.length; i++) {
    if(str[i-1] === ' ') {
      newString += str[i].toUpperCase()
    } else {
      newString += str[i]
    }
  }
  return newString

}

module.exports = capitalize;
