/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function (nums, target) {
	const result = {};
	for (let i = 0; i < nums.length; i++) {
		const complement = target - nums[i];

		if (result.hasOwnProperty(complement)) {
			return [result[complement], i];
		}
		result[nums[i]] = i;
	}
	return [];
};

const twoSumBroot = (nums, target) => {
	for (let i = 0; i < nums.length; i++) {
		for (let j = i + 1; j < nums.length; j++) {
			if (nums[i] + nums[j] == target) {
				return [i, j];
			}
		}
	}
	return [];
};
console.log(twoSum([2, 7, 11, 15], 9)); // [0, 1] or [1, 0]
console.log(twoSumBroot([2, 7, 11, 15], 9)); // [0, 1] or [1, 0]
console.log(twoSum([3, 2, 4], 6)); // [1, 2] or [2, 1]
console.log(twoSumBroot([3, 2, 4], 6)); // [1, 2] or [2, 1]
console.log(twoSum([3, 3], 6)); // [0, 1] or [1, 0]
console.log(twoSumBroot([3, 3], 6)); // [0, 1] or [1, 0]
