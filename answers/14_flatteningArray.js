// Flatten a nested array into a single-level array using recursion
const flattenArray = (arr) => {
	// Initialize the result array
	let result = [];

	// Iterate through each item in the array
	arr.forEach((item) => {
		// If the item is an array, recursively flatten it
		if (Array.isArray(item)) {
			result = result.concat(flattenArray(item));
		} else {
			// Otherwise, just add the item to the result
			result.push(item);
		}
	});

	return result;
};

// Flatten a nested array into a single-level array using flat()
const flattenArrayUsingBuiltInFunc = (arr) => {
	return arr.flat(Infinity); // `Infinity` ensures all levels are flattened
};

// Example usage
const nestedArray = [1, [2, [3, [4, 5]]], 6, [7, 8]];
console.log(flattenArray(nestedArray)); // Output: [1, 2, 3, 4, 5, 6, 7, 8]
console.log(flattenArrayUsingBuiltInFunc(nestedArray)); // Output: [1, 2, 3, 4, 5, 6, 7, 8]
