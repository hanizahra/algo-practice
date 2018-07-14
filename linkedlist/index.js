// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document



class Node {
	constructor(data, next = null) {
		this.data = data;
		this.next = next;
	}
}

class LinkedList {
	constructor() {
		this.head = null;
	}

	insertFirst(data) {
		// const node = new Node(data, this.head);
		// this.head = node;
		//// or do below
		this.head = new Node(data, this.head);
		//// or use a previous method
		// this.insertAt(data, 0);
	}

	size() {
		let counter = 0;
		let node = this.head;

		while(node) {
			counter++;
			node = node.next;
		}

		return counter;
	}

	getFirst() {
		let node = this.head;
		return node;
		//// or use a method
		// return this.getAt(0);
	}

	getLast() {
		let node = this.head;

		if(!node) {
			return null;
		}

		while(node) {
			if(node.next === null) {
				return node;
			}

			node = node.next
		}


		return node;
	}
	//// or use a method
	// this.getAt(this.size()-1)

	clear() {
		this.head = null;
	}

	removeFirst() {

		// let node = this.head;

		// if(node.next) {
		// 	this.head = node.next
		// } else {
		// 	this.head = null;
		// }
		//// or this way

		if(!this.head) {
			return;
		}

		this.head = this.head.next;

	}

	removeLast() {
		if(!this.head){ 
			return;
		}

		if(this.head.next === null) {
			return this.head = null;
		}

		if(this.head.next.next == null) {
			return this.head.next = null;
		}

		let previous = this.head;
		let node = this.head.next;

		while(node.next) {
			previous = node
			node = node.next;
		}
		return previous.next = null;
	}

	insertLast(data) {

		// if(!this.head) {
		// 	this.head = new Node(data);
		// }

		// let node = this.head;
		// while(node.next !== null) {
		// 	node = node.next
		// }

		// node.next = new Node(data);

		//// or utilize the getLast(); method

		const last = this.getLast();

		if(last) {
			last.next = new Node(data);
		} else {
			this.head = new Node(data);
		}
	}

	getAt(index) {
		// unecessary
		// if(!this.head) {
		// 	return null;
		// }

		
		let counter = 0;
		let node = this.head

		while(node) {
			
			if(counter === index) {
				return node
			}
			node = node.next
			counter++

		}
		return null;
	}

	removeAt(index) {
		// in case linked list is empty
		if(!this.head) {
			return null;
		}

		// in case linked list length is only 1
		if(!this.head.next) {
			if(index === 0) {
				this.head = previous.next;
			}
		}

		let counter = 1;
		let previous = this.head;
		let node = this.head.next;

		// if linked list size is greater than one
		while(node) {
			if(index === 0) {
				this.head = previous.next;
			}

			if(index === counter) {
				previous.next = node.next
			}
			counter++;
			node = node.next;
		}

		return null

	}

	insertAt(data, index) {
		if(!this.head) {
			this.head = new Node(data);
			return; 
		}

		if(index === 0) {
			this.head = new Node(data, this.head)
			return;
		}

		const previous = this.getAt(index-1) || this.getLast();
		const newNode = new Node(data, previous.next)
		previous.next = newNode;	  

	}

	forEach(fn) {

		let node = this.head
		let counter = 0;

		while(node) {
			fn(node, counter);
			counter++;
			node = node.next
		}

	}

	*[Symbol.iterator]() {
		let node = this.head;
		while(node) {
			yield node;
			node = node.next 
		}
	}


}


module.exports = { Node, LinkedList };
