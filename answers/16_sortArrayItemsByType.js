const categorizeAndSortArr = (arr) => {
	const categorized = arr.reduce((acc, cur) => {
		const type = typeof cur;
		if (!acc[type]) {
			acc[type] = [];
		}
		acc[type].push(cur);
		return acc;
	}, {});

	for (const type in categorized) {
		if (type === "number") {
			categorized[type].sort((a, b) => a - b);
		} else if (type === "string") {
			categorized[type].sort();
		}
	}
	return Object.values(categorized).flat();
};

// Form an object out of array to categorize items by type
const groupByType = (arr) => {
	return arr.reduce((a, b) => {
		if (!a[typeof b]) {
			a[typeof b] = [b];
		} else {
			a[typeof b].push(b);
		}
		return a;
	}, {});
};

// Sort items by 1st categorizing by type and then sorting each categorized items object and form a new array
const sortArrayItemsByType = (arr) => {
	const groupedObj = groupByType(arr);
	Object.keys(groupedObj).forEach((type) => {
		if (type == "number") groupedObj[type].sort((a, b) => a - b);
		else groupedObj[type].sort();
	});
	return Object.values(groupedObj).flat();
};
const arr = [
	4,
	true,
	null,
	"Hermione",
	12,
	undefined,
	false,
	null,
	"Ron",
	"Harry",
	1,
	false,
	41,
	true,
	24,
	false,
	11,
];
console.log(sortArrayItemsByType(arr));
console.log(categorizeAndSortArr(arr));
