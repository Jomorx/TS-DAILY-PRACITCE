/*
 * @lc app=leetcode.cn id=21 lang=typescript
 *
 * [21] 合并两个有序链表
 */
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}
// @lc code=start
/**
 * Definition for singly-linked list.
  class ListNode {
      val: number
      next: ListNode | null
      constructor(val?: number, next?: ListNode | null) {
          this.val = (val===undefined ? 0 : val)
          this.next = (next===undefined ? null : next)
      }
  }
 */
 function mergeTwoLists(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    const head = new ListNode()
    let cur = head
    while (l1 && l2) {
        if (l1.val < l2.val) {
            cur.next = l1
            l1 = l1.next
            cur=cur.next
        } else {
            cur.next = l2
            l2 = l2.next
            cur=cur.next
        }
    }
    if(l1){
        cur.next=l1
    }else{
        cur.next=l2
    }
    return head.next
};
// @lc code=end

