const arr = [3, 26, 15, 21, 28, 11, 31];

// Create a new array containing numbers in an ascending order from the given array
// Do no modify the original array
const createSortedArray = () => {
	return arr.slice().sort((a, b) => a - b);
};

// Create a new array containing numbers in an descending order from the given array
// Do no modify the original array
const createRevSortedArray = () => {
	return arr.slice().sort((a, b) => b - a);
};

// Sort numbers in an array in ascending order
// Do not create new array modify the original array
const sortArrayInAscOrder = (arr) => {
	arr.sort((a, b) => a - b);
};

// Sort numbers in an array in descending order
// Do not create new array modify the original array
const sortArrayInDescOrder = (arr) => {
	arr.sort((a, b) => b - a);
};

console.log("Before sort, original array : ", arr);
console.log("Newly created sorted array in asc order :", createSortedArray());
console.log("After sort, original array :", arr);

console.log("Before sort, original array : ", arr);
console.log(
	"Newly created sorted array in desc order :",
	createRevSortedArray()
);
console.log("After sort, original array :", arr);

sortArrayInAscOrder(arr);
console.log("After asc sort, original array :", arr);

sortArrayInDescOrder(arr);
console.log("After desc sort, original array :", arr);
