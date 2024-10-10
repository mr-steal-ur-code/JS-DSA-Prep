/** 
@param {string} s
*/

const longestSubLength = (s) => {
	let charSet = new Set(); // To keep track of unique characters in the current window
	let left = 0; // Left pointer of the sliding window
	let maxLength = 0; // Store the length of the longest substring found

	for (let right = 0; right < s.length; right++) {
		// If the character at `right` pointer is already in the set, shrink the window
		while (charSet.has(s[right])) {
			charSet.delete(s[left]); // Remove the leftmost character and move left pointer
			left++;
		}
		charSet.add(s[right]); // Add the current character to the set
		maxLength = Math.max(maxLength, right - left + 1); // Update maxLength
	}

	return maxLength;
};

console.log(longestSubLength("abcabcbb")); // 3
console.log(longestSubLength("bbbbb")); // 1
console.log(longestSubLength("pwwkew")); // 3
