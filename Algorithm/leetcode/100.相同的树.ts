/*
 * @lc app=leetcode.cn id=100 lang=typescript
 *
 * [100] 相同的树
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
  class TreeNode {
      val: number
      left: TreeNode | null
      right: TreeNode | null
      constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
          this.val = (val===undefined ? 0 : val)
          this.left = (left===undefined ? null : left)
          this.right = (right===undefined ? null : right)
      }
  }

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
    if(!p||!q) return !!p===!!q;
    const isSame = (left:TreeNode | null,right:TreeNode | null):boolean=>{
        if(!left||!right) return !!left===!!right
        if(left.val===right.val&&left&&right){
            return isSame(left.left,right.left)&&isSame(left.right,right.right)
        }else{
            return false;
        }
    }
    return p.val===q.val&&isSame(p.left,q.left)&&isSame(p.right,q.right)
};
// @lc code=end

