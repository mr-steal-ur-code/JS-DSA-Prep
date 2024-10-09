function longestWord(str) {
	const words = str.split(" ");
	let longest = words[0];
	for (const word of words) {
		if (word.length > longest.length) {
			longest = word;
		}
	}
	return longest;
}

console.log(longestWord("The quick brown fox jumped over the lazy dog")); //"jumped"
console.log(longestWord("Harry is a Wizard who belongs to Gryffindor House")); //"Gryffindor"
