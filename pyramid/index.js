// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
  let hashCount = 1;
  let spaceCount = n - 1;
  for(i=0; i<n; i++) {
    let layer = ' '.repeat(spaceCount) + '#'.repeat(hashCount) + ' '.repeat(spaceCount);
    console.log(layer);
    hashCount = hashCount + 2;
    spaceCount = spaceCount - 1;
  }
}

module.exports = pyramid;
