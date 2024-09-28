/*9. Transform Arrays to Objects
Write a function that transforms an array of objects into a single object. Each object in the array should
contribute a key-value pair to the final object. The key should be derived from one property of the
object, and the value should be derived from another property.

Input: [ {id: 1, name: "Harry"}, {id: 2, name: "Ron"}, {id: 3, name: "Hermione"} ];
Output: { 1: "Harry", 2: "Ron", 3: "Hermione" }
*/

const transformArr = (arr) => {

}
console.log(
	transformArr([
		{ id: 1, name: "Harry" },
		{ id: 2, name: "Ron" },
		{ id: 3, name: "Hermione" },
	])
);
