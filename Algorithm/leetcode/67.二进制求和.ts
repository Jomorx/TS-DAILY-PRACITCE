/*
 * @lc app=leetcode.cn id=67 lang=typescript
 *
 * [67] 二进制求和
 */

// @lc code=start
function addBinary(a: string, b: string): string {
    const nums1 =Array.from(a).reverse();
    const nums2 = Array.from(b).reverse();
    const res:number[] =[]
    let sum = 0;
    for(let i = 0;i<nums1.length||i<nums2.length;i++){
        if(nums1[i]) sum+=parseInt(nums1[i])
        if(nums2[i]) sum+=parseInt(nums2[i])
        res.push(sum%2)
        if(sum>=2) sum=1
        else sum = 0;
    }
    if(sum!==0) res.push(1)
    return res.reverse().join("")
};
// @lc code=end

