// Transform arrays

const users = [
	{ id: 1, name: "Harry" },
	{ id: 2, name: "Ron" },
	{ id: 3, name: "Hermione" },
];

const transformArrays = (arr) => {
	return arr.reduce((a, b) => {
		return { ...a, [b[Object.keys(b)[0]]]: b[Object.keys(b)[1]] };
	}, {});
};

console.log(transformArrays(users));
