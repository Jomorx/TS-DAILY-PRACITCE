/*
 * @lc app=leetcode.cn id=88 lang=typescript
 *
 * [88] 合并两个有序数组
 */

// @lc code=start
/**
 Do not return anything, modify nums1 in-place instead.
 */
const merge=(nums1: number[], m: number, nums2: number[], n: number): void=> {
    nums1.splice(m,nums1.length-m,...nums2.slice(0,n))
    nums1.sort((a,b)=>a-b)
};
// @lc code=end

