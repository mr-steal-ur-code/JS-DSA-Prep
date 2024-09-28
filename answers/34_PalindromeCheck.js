const palindromeCheck = (str) => {
	const cleanedStr = str.replace(/[^a-z0-9]/gi, "").toLowerCase();
	const letters = cleanedStr.split("");
	const reversedArr = [];
	for (let i = letters.length - 1; i >= 0; i--) {
		reversedArr.push(letters[i]);
	}
	return reversedArr.join("") === cleanedStr;
};

console.log(palindromeCheck("hello")); //expect false
console.log(palindromeCheck("level")); //expect true
console.log(palindromeCheck("A man. a plan. a canal. Panama")); //expect true
