function compressString(str) {
	let compressed = "";
	let count = 1;
	for (let i = 0; i < str.length; i++) {
		if (str[i] === str[i + 1]) {
			count++;
		} else {
			compressed += str[i] + (count > 1 ? count : "");
			count = 1;
		}
	}
	return compressed.length < str.length ? compressed : str;
}

console.log(compressString("abc")); //"a1b1c1"
console.log(compressString("aabcccccaaa")); //"a2b1c5a3"
console.log(compressString("aabbbbbcddddefff")); // a2b5c1d4e1f3
