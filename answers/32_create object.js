function NumberedList(...args) {
	// Loop through the arguments and add them to the numberedList object
	for (let i = 0; i < args.length; i++) {
		this[i] = args[i];
	}
	// Set the length property based on the number of arguments passed
	this.length = args.length;
}

// Example usage:
const list1 = new NumberedList("dog");
console.log(list1); // {0: 'dog', length: 1}

const list2 = new NumberedList("dog", "bird", "cat");
console.log(list2); // {0: 'dog', 1: 'bird', 2: 'cat', length: 3}
