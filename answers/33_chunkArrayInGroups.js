const chunkArrayInGroups = (arr, size) => {
	let newArr = [];
	for (i = 0; i < arr.length; i += size) {
		// Slice the array from the current index up to size elements ahead
		newArr.push(arr.slice(i, i + size));
	}
	return newArr;
};

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2)); //[ [ 'a', 'b' ], [ 'c', 'd' ] ]
console.log(chunkArrayInGroups(["a", "b", "c", "d", "e", "f", "g", "h"], 3)); //[ [ 'a', 'b', 'c' ], [ 'd', 'e', 'f' ], [ 'g', 'h' ] ]
console.log(chunkArrayInGroups(["a", "b", "c", "d", "e", "f", "g", "h"], 4)); //[ [ 'a', 'b', 'c', 'd' ], [ 'e', 'f', 'g', 'h' ] ]
