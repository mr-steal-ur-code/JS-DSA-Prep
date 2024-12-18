// Reverse an array
//Write a function that takes an array as input and returns a new array with the items in reverse order.
const arrayReverse = (arr) => {
	return [...arr].reverse();
};

const arrRev = (arr) => {
	let reveredArr = [];
	for (let i = arr.length - 1; i >= 0; i--) {
		reveredArr.push(arr[i]);
	}
	return reveredArr;
};

console.log(arrRev(["one", "two", "three", "four"]));
console.log(arrayReverse([49, 12, 35, 10, 43]));
