// Given an array nums of n integers, find all unique triplets in the array which give the sum of zero.

// Input: nums = [-1, 0, 1, 2, -1, -4]
// Output: [[-1, -1, 2], [-1, 0, 1]]
// Explanation: The triplets are unique and their sum is zero.

// Input: nums = [0, 1, 1]
// Output: []
// Explanation: There is no triplet that sums to zero.

const threeSum = (nums) => {
	let result = [];
	nums.sort((a, b) => a - b);
	for (let i = 0; i < nums.length - 2; i++) {
		if (i > 0 && nums[i] === nums[i - 1]) continue;
		let left = i + 1;
		let right = nums.length - 1;
		while (left < right) {
			let sum = nums[i] + nums[left] + nums[right];
			if (sum === 0) {
				result.push([nums[i], nums[left], nums[right]]);
				while (nums[left] === nums[left + 1]) {
					left++;
				}
				while (nums[right] === nums[right - 1]) {
					right--;
				}
				left++;
				right--;
			} else if (sum < 0) {
				left++;
			} else {
				right--;
			}
		}
	}
	return result;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4])); // [[-1, -1, 2], [-1, 0, 1]]
console.log(threeSum([0, 1, 1])); // []
console.log(threeSum([0, 0, 0])); // [[0, 0, 0]]
