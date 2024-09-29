/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
	const romanMap = {
		I: 1,
		V: 5,
		X: 10,
		L: 50,
		C: 100,
		D: 500,
		M: 1000,
	};

	let total = 0;

	for (let i = 0; i < s.length; i++) {
		let currentVal = romanMap[s[i]];
		let nextVal = romanMap[s[i + 1]];

		if (nextVal && currentVal < nextVal) {
			total -= currentVal;
		} else {
			total += currentVal;
		}
	}

	return total;
};
console.log(romanToInt("III")); // expect 3
console.log(romanToInt("LVIII")); // expect 58
console.log(romanToInt("MCMXCIV")); // expect 1994