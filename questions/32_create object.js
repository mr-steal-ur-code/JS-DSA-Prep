/*32. Create Object
Declare a function "numberedList", which return a new instance of a 'numberedList' object when invoked with the 'new' keyword.
NumberedList objects should function similarly to arrays - i e. they store values at number indexes, starting at 0. Any arguments passed into the 'numberedList' constructor should be sequentially added to the numberedList when it is instantiated. NumberedList objects should also contain a length property, which keeps track of the number elements in the list.

input: new NumberedList("dog", "bird", "cat")
output: {0: 'dog', 1: 'bird', 2: 'cat', length: 3}
*/

function NumberedList(...args) {
	// Loop through the arguments and add them to the numberedList object
	// Set the length property based on the number of arguments passed
}

const list1 = new NumberedList("dog");
console.log(list1); //Expect {0: 'dog', length: 1}

const list2 = new NumberedList("dog", "bird", "cat");
console.log(list2); //Expect {0: 'dog', 1: 'bird', 2: 'cat', length: 3}
