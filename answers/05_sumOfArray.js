// Sum of numbers in an array
const arrSum = (arr) => {
	let total = 0;
	for (let i = 0; i < arr.length; i++) {
		total += arr[i];
	}
	return total;
};
console.log(arrSum([2, 4, 6, -10, 2]));

const sumOfArray = (arr) => {
	return arr.reduce((a, b) => a + b);
};

// Product of numbers in an array
const productOfArray = (arr) => {
	return arr.reduce((a, b) => a * b);
};

// Flatten nested array using reduce and concat function
const flattenArray = (arr) => {
	return arr.reduce((a, b) => {
		return a.concat(b);
	}, []);
};

// Flatten nested array using reduce func and spread operator
const flattenWithSpread = (arr) => {
	return arr.reduce((a, b) => {
		return [...a, ...b];
	}, []);
};

// Count occurrences of each items in an array
const countOccurrences = (arr) => {
	return arr.reduce((a, b) => {
		a[b] = (a[b] || 0) + 1;
		return a;
	}, {});
};

// Flatten n level nested array using flat function
const flattenNLevelArrays = (arr) => {
	return arr.flat(Infinity);
};

// Count occurrences of each items in a n level nested array
const countOccurrenceInNestedArray = (arr) => {
	return countOccurrences(flattenNLevelArrays(arr));
};
console.log(sumOfArray([1, 2, 3, 4, 5]));
console.log(productOfArray([1, 2, 3, 4, 5]));
console.log(
	flattenArray([
		[1, 2],
		[3, 4, 5],
		[6, 7],
	])
);
console.log(countOccurrences([1, 2, 23, 4, 5, 23]));
console.log(
	flattenNLevelArrays([
		[1, 2, [3]],
		[4, 5, [1, 2], 6],
		[7, 8],
	])
);
console.log(
	countOccurrenceInNestedArray([
		[1, 2, [3]],
		[4, 5, [1, 2], 6],
		[7, 8],
	])
);
console.log(
	flattenWithSpread([
		[1, 2],
		[3, 4, 5],
		[6, 7],
	])
);
console.log(
	flattenWithSpread([
		[1, 2, [3]],
		[4, 5, [1, 2], 6],
		[7, 8],
	])
);
//console.log(countOccurrences([[1,2],[3,4,5],[6,7]]))
