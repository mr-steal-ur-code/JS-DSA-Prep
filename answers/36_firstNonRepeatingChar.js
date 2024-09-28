const firstNonRepeatingChar = (str) => {
	let charCount = {};
	for (const char of str) {
		charCount[char] = (charCount[char] || 0) + 1;
	}
	for (const char of str) {
		if (charCount[char] === 1) {
			return char;
		}
	}
	return null;
};

console.log(firstNonRepeatingChar("swiss")); // expect "w"
console.log(firstNonRepeatingChar("aabbccdd")); // expect null
