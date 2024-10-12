/** 
@param {number[]} nums
@param {number} size
*/

const maxSumSubArray = (nums, size) => {
	let maxSum = 0;
	let currentSum = 0;
	for (let i = 0; i < size; i++) {
		currentSum += nums[i];
	}
	maxSum = currentSum;
	for (let i = size; i < nums.length; i++) {
		currentSum += nums[i] - nums[i - size];
		maxSum = Math.max(maxSum, currentSum);
	}
	return maxSum;
};

console.log(maxSumSubArray([2, 1, 5, 1, 3, 2], 3)); // 9
console.log(maxSumSubArray([2, 3, 4, 1, 5], 2)); // 7
