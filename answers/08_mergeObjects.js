const obj1 = { a: 1, b: 2, c: 3 };
const obj2 = { b: 3, d: 4 };
const obj3 = { e: 5, c: 2 };

// Merge multiple objects into single object
const mergeObjects = (obj1, obj2, obj3) => {
	return [obj1, obj2, obj3].reduce((a, b) => {
		return { ...a, ...b };
	}, {});
};

const mergeObjs = (obj1, obj2, obj3) => {
	return { ...obj1, ...obj2, ...obj3 };
};

console.log("merge objects:", mergeObjs(obj1, obj2, obj3));
console.log(mergeObjects(obj1, obj2, obj3));
