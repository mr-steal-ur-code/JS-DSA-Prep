/*7. Group Objects by Property Values
Write a function that groups objects in an array by a specified property and collects the values of another property into arrays corresponding to each unique property value.

Input: [ {name: "Harry", age: 10}, {name: "Ron", age: 12}, {name: "Harry", age: 15}, {name: "Hermione", age: 13}, {name: "Ron", age: 13} ];
Output: { "Harry": [10, 15], "Ron": [12, 13], "Hermione": [13] }
*/

const groupObjs = (arr) => {

};
console.log(
	groupObjs([
		{ name: "Harry", age: 10 },
		{ name: "Ron", age: 12 },
		{ name: "Harry", age: 15 },
		{ name: "Hermione", age: 13 },
		{ name: "Ron", age: 13 },
	])
);
