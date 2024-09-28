// Find a missing no. from an array of sorted numbers (Consider only 1 no is missing)
const findMissingNumInRange = (range) => {
	const lengthOfRange = range[range.length - 1];
	const totalSum = (lengthOfRange * (lengthOfRange + 1)) / 2;
	return totalSum - range.reduce((a, b) => a + b, 0);
};

// Find smallest positive number missing from an unsorted array of numbers (numbers can be +ve or -ve)
const findMissingSmallestPositiveInteger = (arr) => {
	const filteredAndSortedArr = arr
		.filter((item) => item > 0)
		.sort((a, b) => a - b);
	for (let i = 0; i < filteredAndSortedArr.length; i++) {
		if (filteredAndSortedArr[i] != i + 1) return i + 1;
	}
	return filteredAndSortedArr.length + 1;
};

// Find smallest positive number missing from an unsorted array of numbers (numbers can be +ve or -ve) using Set (MORE EFFICIENT)
const findMissingSmallestPositiveIntegerWithSet = (arr) => {
	const newSet = new Set(arr.filter((item) => item > 0));
	for (let i = 1; i <= arr.length + 1; i++) {
		if (!newSet.has(i)) return i;
	}
};

console.log(findMissingNumInRange([1, 2, 4, 5, 6, 7, 8, 9, 10]));
console.log(findMissingSmallestPositiveInteger([3, -1, 1, 2, -5]));
console.log(findMissingSmallestPositiveInteger([3, 1, -1, 8, 2, -5]));
console.log(findMissingSmallestPositiveIntegerWithSet([3, -1, 1, 2, -5]));
console.log(findMissingSmallestPositiveIntegerWithSet([3, 1, -1, 8, 2, -5]));
