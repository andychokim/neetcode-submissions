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
        // can utilize Set??
        let visitedSet = new Set();

        while (head) {
            if (visitedSet.has(head)) return true;
            visitedSet.add(head);
            head = head.next;
        }
        return false;
    }
}
