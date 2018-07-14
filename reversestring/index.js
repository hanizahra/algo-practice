// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
	let newWord = [];
	for(i = str.length; i >= 0; i--) {
		newWord.push(str[i])
	}
  	newWord = newWord.join('');
  	return newWord;
}


module.exports = reverse;
