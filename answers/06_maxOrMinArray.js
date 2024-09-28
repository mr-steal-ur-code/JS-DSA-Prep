// Find max num in an array of numbers
const minMaxArr = (arr) => {
	if (!arr.length) return null;
	let min = arr[0];
	let max = arr[0];
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] > max) {
			max = arr[i];
		} else if (arr[i] < min) {
			min = arr[i];
		}
	}
	return { min, max };
};

const findMax = (arr) => {
	return Math.max(...arr);
};

// Find min num in an array of numbers
const findMin = (arr) => {
	return Math.min(...arr);
};

// Find max num in an array of numbers using reduce func
const findMaxUsingReduce = (arr) => {
	return arr.reduce((a, b) => Math.max(a, b), arr[0]);
};

// Find min num in an array of numbers using reduce fun
const findMinUsingReduce = (arr) => {
	return arr.reduce((a, b) => Math.min(a, b), arr[0]);
};

console.log(minMaxArr([9, -3, 6, 10, 2, 4, 39, 6]));
console.log(findMax([3, 5, 2, 1]));
console.log(findMin([3, 5, 2, 1]));
console.log(findMaxUsingReduce([3, 5, 2, 1]));
console.log(findMinUsingReduce([3, 5, 2, 1]));
