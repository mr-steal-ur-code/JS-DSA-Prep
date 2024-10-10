/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
	let i = m - 1,
		j = n - 1,
		k = m + n - 1;
	while (i >= 0 && j >= 0) {
		if (nums1[i] > nums2[j]) {
			nums1[k] = nums1[i];
			i--;
		} else {
			nums1[k] = nums2[j];
			j--;
		}
		k--;
	}
	while (j >= 0) {
		nums1[k] = nums2[j];
		k--;
		j--;
	}
	console.log(nums1);
};

merge([2, 4], 2, [3], 1); // [2, 3, 4]
merge([2, 4, 6, 8, 10], 5, [1, 3, 5, 7, 9], 5); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
merge([2, 4, 6, 8, 10], 5, [1, 3, 5, 7], 4); // [1, 2, 3, 4, 5, 6, 7, 8, 10]
merge([2, 4, 6, 8, 10, 12, 14], 7, [1, 3, 5, 7], 4); // [1, 2, 3, 4, 5, 6, 7, 8, 10, 12, 14]
