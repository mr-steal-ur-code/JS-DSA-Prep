const objects = [
	{ name: "Harry", age: 10 },
	{ name: "Ron", age: 12 },
	{ name: "Harry", age: 15 },
	{ name: "Hermione", age: 13 },
	{ name: "Ron", age: 13 },
];
const groupObjs = (objs) => {
	return objs.reduce((acc, obj) => {
		const { name, age } = obj;
		if (!acc[name]) {
			acc[name] = [];
		}
		acc[name].push(age);
		return acc;
	}, {});
};

console.log("group objects:", groupObjs(objects));
