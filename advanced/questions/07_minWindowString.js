/** You are given two strings, s and t. You need to find the minimum window in s which contains all the characters of t (including duplicates). If there is no such window in s that covers all characters in t, return the empty string "".

If there are multiple such windows, return the one that starts earlier.

Input: s = "ADOBECODEBANC", t = "ABC"
Output: "BANC"

Input: s = "a", t = "a"
Output: "a"

@param {String} s
@param {String} t
*/

const minWindowString = (s, t) => {

};

console.log(minWindowString("ADOBECODEBANC", "ABC")); // "BANC"
console.log(minWindowString("a", "a")); // "a"
console.log(minWindowString("a", "aa")); // ""
