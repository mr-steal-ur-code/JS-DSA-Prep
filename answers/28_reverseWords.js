function reverseWords(str) {
	return str.split(" ").reverse().join(" ");
}

const revWords = (str) => {
	const strArr = str.split(" ");
	const result = [];
	for (let i = strArr.length - 1; i >= 0; i--) {
		result.push(strArr[i]);
	}
	return result.join(" ");
};

console.log(revWords("hello world"));
console.log(reverseWords("Harry is a Wizard who belongs to Gryffindor House"));
