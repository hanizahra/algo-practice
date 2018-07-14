// --- Directions
// Given a linked list, return the element n spaces
// from the last node in the list.  Do not call the 'size'
// method of the linked list.  Assume that n will always
// be less than the length of the list.
// --- Examples
//    const list = new List();
//    list.insertLast('a');
//    list.insertLast('b');
//    list.insertLast('c');
//    list.insertLast('d');
//    fromLast(list, 2).data // 'b'

function fromLast(list, n) {
	let slow = list.head;
	let fast = list.head;

	// for(i=0; i<n; i++) {
	// 	fast = fast.next;
	// }

	//// or with a while loop

	while(n > 0) {
		fast = fast.next;
		n--;
	}

	while(fast.next !== null) {
		slow = slow.next;
		fast = fast.next;
	}
	console.log('this is slow ', slow)
	return slow;

}

module.exports = fromLast;
