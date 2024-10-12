/** Given an array nums of n integers, find all unique triplets in the array which give the sum of zero.

Input: nums = [-1, 0, 1, 2, -1, -4]
Output: [[-1, -1, 2], [-1, 0, 1]]
Explanation: The triplets are unique and their sum is zero.

Input: nums = [0, 1, 1]
Output: []
Explanation: There is no triplet that sums to zero.
@param {number[]} nums
*/

const threeSum = (nums) => {
	let result = [];
	// Step 1: Sort the array to make it easier to find triplets
	nums.sort((a, b) => a - b);
	// Step 2: Iterate through the array, fixing one number at a time
	for (let i = 0; i < nums.length - 2; i++) {
		// Skip duplicates for the first number
		if (i > 0 && nums[i] === nums[i - 1]) continue;
		// Step 3: Initialize two pointers
		let left = i + 1;
		let right = nums.length - 1;
		// Step 4: Use two pointers to find pairs that sum to -nums[i]
		while (left < right) {
			let sum = nums[i] + nums[left] + nums[right];
			if (sum === 0) {
				// Found a triplet
				result.push([nums[i], nums[left], nums[right]]);
				// Move both pointers and avoid duplicates
				while (left < right && nums[left] === nums[left + 1]) {
					left++;
				}
				while (left < right && nums[right] === nums[right - 1]) {
					right--;
				}
				left++;
				right--;
			} else if (sum < 0) {
				// If sum is too small, move the left pointer to increase the sum
				left++;
			} else {
				// If sum is too large, move the right pointer to decrease the sum
				right--;
			}
		}
	}
	return result;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4])); // [[-1, -1, 2], [-1, 0, 1]]
console.log(threeSum([0, 1, 1])); // []
console.log(threeSum([0, 0, 0])); // [[0, 0, 0]]
