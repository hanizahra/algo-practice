// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## ' 
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// function steps(n) {
//   //// one way
//   // let hashCount = 1
//   // let spaceCount = n-1

//   // for(i=0; i<n; i++) {
//   //   console.log('#'.repeat(hashCount) + ' '.repeat(spaceCount))
//   //   hashCount += 1
//   //   spaceCount -= 1
//   // }

//   //// another way
//   // for(row=0; row<n; row++) {
//   //   let stair = '';
//   //   for(column=0; column<n; column++) {
//   //     if(column <= row) {
//   //       stair += '#'
//   //     } else {
//   //       stair += ' '
//   //     }
//   //   }
//   //   console.log(stair)
//   // }

// }

//// and yet another way: recursion

function steps(n, row = 0, stair = ''){
  if(n === row) {
    return;
  }

  if(stair.length === n) {
    console.log(stair)
    return steps(n, row + 1)
  }

  if(stair.length <= row) {
    stair += "#"
  } else {
    stair += " "
  }

  steps(n, row, stair)

}


module.exports = steps;
