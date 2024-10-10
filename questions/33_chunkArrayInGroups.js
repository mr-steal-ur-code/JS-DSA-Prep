/*33. Chunk Array into Groups
Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.

input: (["a", "b", "c", "d"], 2)
output: [["a", "b"], ["c", "d"]]
*/

const chunkArrayInGroups = (arr, size) => {

};

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2)); //[ [ 'a', 'b' ], [ 'c', 'd' ] ]
console.log(chunkArrayInGroups(["a", "b", "c", "d", "e", "f", "g", "h"], 3)); //[ [ 'a', 'b', 'c' ], [ 'd', 'e', 'f' ], [ 'g', 'h' ] ]
console.log(chunkArrayInGroups(["a", "b", "c", "d", "e", "f", "g", "h"], 4)); //[ [ 'a', 'b', 'c', 'd' ], [ 'e', 'f', 'g', 'h' ] ]
