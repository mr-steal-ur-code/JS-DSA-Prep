// Reverse a string
const revStr = (str) => {
	return str.split("").reverse().join("");
};

const stringReverse = (word) => {
	let reversedWord = "";
	for (let i = word.length - 1; i >= 0; i--) {
		reversedWord += word[i];
	}
	return reversedWord;
};

// Check if string is palindrome,
// string may contain punctuation or other symbols
// which can be ignored before checking
const isPalindrome = (str) => {
	const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
	const reversedStr = revStr(cleanedStr);
	return cleanedStr === reversedStr;
};
console.log(revStr("hello world"));
console.log(isPalindrome("A man a plan a canal Panama"));
console.log(isPalindrome("Hello World"));
