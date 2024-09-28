const text = "HArry is a wizard who belongs to GryffIndor House";
const vowels = "aeiouAEIOU";

const vowelArr = ["a", "e", "i", "o", "u"];
const countVowelLoop = (input) => {
	let vowelCount = 0;
	for (let i = 0; i < input?.length; i++) {
		if (vowelArr.includes(input[i].toLowerCase())) {
			vowelCount++;
		}
	}
	return vowelCount;
};

// Count vowels in a text using forEach and indexOf func
const countVowels = (str) => {
	let count = 0;
	str.split("").forEach((element) => {
		if (vowels.indexOf(element) != -1) count++;
	});
	return count;
};

// Count vowels in a text using regex
const countVowelsUsingRegex = (str) => {
	const matches = str.match(/[aeiouAEIOU]/g);
	return matches ? matches.length : 0;
};

// Count vowels in a text using reduce and indexOf func
const countVowelsUsingReduce = (str) => {
	return str.split("").reduce((a, b) => {
		return vowels.indexOf(b) != -1 ? a + 1 : a;
	}, 0);
};

// Count vowels in a text using reduce func and Set (BEST in efficiency)
const countVowelsUsingSet = (str) => {
	const vowelSet = new Set(vowels);
	return str.split("").reduce((a, b) => {
		return vowelSet.has(b) ? a + 1 : a;
	}, 0);
};

console.log(countVowelLoop(text));
console.log(countVowels(text));
console.log(countVowelsUsingRegex(text));
console.log(countVowelsUsingReduce(text));
console.log(countVowelsUsingSet(text));
