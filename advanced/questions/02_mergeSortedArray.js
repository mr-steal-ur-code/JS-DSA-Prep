/**
 * You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

Merge nums1 and nums2 into a single array sorted in non-decreasing order.

The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
const merge = (nums1, m, nums2, n) => {

	console.log(nums1);
};

merge([2, 4], 2, [3, 7, 9], 3); // [ 2, 3, 4, 7, 9 ]
merge([2, 4, 6, 8, 10], 5, [1, 3, 5, 7], 4); // [1, 2, 3, 4, 5, 6, 7, 8, 10]
merge([20, 40, 60, 80, 100], 5, [10, 30, 50, 70, 90], 5); // [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
