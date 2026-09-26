/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {boolean}
     */
    hasCycle(head) {
        let node = head
        let nodeNext = head?.next

        while(node && nodeNext && node.next && nodeNext.next) {
            if(node === nodeNext) {
                return true
            }

            node = node.next
            nodeNext = nodeNext.next.next
        }

        return false
    }
}
