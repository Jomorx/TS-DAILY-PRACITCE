/*
 * @lc app=leetcode.cn id=101 lang=typescript
 *
 * [101] 对称二叉树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function isSymmetric(root: TreeNode | null): boolean {
    if(!root) return true
    const fn:(l:TreeNode | null,r:TreeNode | null)=>boolean = (l,r)=>{
        if(!(l||r)) return true
        if(!l||!r||l.val!==r.val) return false
        return fn(l.left,r.right)&&fn(l.right,r.left)
    }
    return fn(root.left,root.right)
};
// @lc code=end
