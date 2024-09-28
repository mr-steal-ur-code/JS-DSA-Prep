const words = [
	"Harry",
	"is",
	"a",
	"Wizard",
	"who",
	"belongs",
	"to",
	"Gryffindor",
	"House",
];

// Concat strings in an array
const concatStrInArray = (arr) => {
	return arr.join(" ");
};
// Concat strings in an array using reduce func
const concatStrInArrayUsingReduce = (arr) => {
	return arr.reduce((a, b) => {
		return a + " " + b;
	});
};

const concatStr = (strArr) => {
	let concatedString = "";
	for (let i = 0; i < strArr.length; i++) {
		concatedString += " " + strArr[i];
	}
	return concatedString.trimStart();
};

console.log(concatStr(words));
console.log(concatStrInArray(words));
console.log(concatStrInArrayUsingReduce(words));
