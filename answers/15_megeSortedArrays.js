// Merge Sort Algorithm - Time complexity O(n+m)
const mergeSortedArrays = (arr1, arr2) => {
	let mergedArray = [];
	let i = 0,
		j = 0;
	// Compare both array elements and push the smaller one
	while (i < arr1.length && j < arr2.length) {
		if (arr1[i] < arr2[j]) {
			mergedArray.push(arr1[i]);
			i++;
		} else {
			mergedArray.push(arr2[j]);
			j++;
		}
	}
	// Push the remaining from 1st arr
	while (i < arr1.length) {
		mergedArray.push(arr1[i]);
		i++;
	}
	// Push the remaining from 2nd arr
	while (j < arr2.length) {
		mergedArray.push(arr2[j]);
		j++;
	}
	return mergedArray;
};

console.log(
	mergeSortedArrays([1, 2, 3, 4, 5, 20], [2, 4, 6, 8, 10, 20, 30, 35])
);
