/**
Given an integer, convert it to a Roman numeral.

Roman numerals are typically written from largest to smallest from left to right. However, there are exceptions where smaller numbers precede larger numbers, indicating subtraction:

I can be placed before V (5) and X (10) to make 4 (IV) and 9 (IX).
X can be placed before L (50) and C (100) to make 40 (XL) and 90 (XC).
C can be placed before D (500) and M (1000) to make 400 (CD) and 900 (CM).

 
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
	const romanMap = [
		["M", 1000],
		["CM", 900],
		["D", 500],
		["CD", 400],
		["C", 100],
		["XC", 90],
		["L", 50],
		["XL", 40],
		["X", 10],
		["IX", 9],
		["V", 5],
		["IV", 4],
		["I", 1],
	];

};

console.log(intToRoman(3)); // "III"
console.log(intToRoman(58)); // "LVIII"
console.log(intToRoman(1994)); //"MCMXCIV"
