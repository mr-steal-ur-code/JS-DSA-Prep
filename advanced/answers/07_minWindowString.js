/**
@param {String} s
@param {String} t
*/

const minWindowString = (s, t) => {
	if (t.length > s.length) return "";
	// Frequency maps for t and the current window
	const tMap = {};
	const windowMap = {};
	// Fill tMap with frequencies of characters in t
	for (let char of t) {
		tMap[char] = (tMap[char] || 0) + 1;
	}
	let have = 0; // Number of unique characters in t that are satisfied in the current window
	const need = Object.keys(tMap).length; // Total unique characters in t
	let res = [-1, -1]; // Result window's start and end indices
	let resLen = Infinity; // Length of the minimum window
	let left = 0;

	// Expand the window by moving the right pointer
	for (let right = 0; right < s.length; right++) {
		let char = s[right];
		// Add the character at the right pointer to the window map
		windowMap[char] = (windowMap[char] || 0) + 1;
		// If the current character count matches the count in t, increment "have"
		if (char in tMap && windowMap[char] === tMap[char]) {
			have++;
		}
		// While the window is valid (i.e., have == need), try to shrink it
		while (have === need) {
			// Check if the current window is the smallest
			if (right - left + 1 < resLen) {
				res = [left, right];
				resLen = right - left + 1;
			}
			// Try to shrink the window by moving the left pointer
			let leftChar = s[left];
			windowMap[leftChar]--;
			// If a character goes below the required count, decrement "have"
			if (leftChar in tMap && windowMap[leftChar] < tMap[leftChar]) {
				have--;
			}
			left++; // Move left pointer to shrink the window
		}
	}
	// Return the smallest window if one was found, otherwise return an empty string
	return resLen === Infinity ? "" : s.slice(res[0], res[1] + 1);
};

console.log(minWindowString("ADOBECODEBANC", "ABC")); // "BANC"
console.log(minWindowString("a", "a")); // "a"
console.log(minWindowString("a", "aa")); // ""
