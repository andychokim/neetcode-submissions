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
        // using Set requires more space.
        // to use only constant space...

        let r1 = head;
        let r2 = head;

        while (r1 && r2) {
            if (!r1 || !r2.next) return false;
            r1 = r1.next;
            r2 = r2.next.next;
            if (r1 === r2) return true;
        }
        return false;

        // ** for checking cycle within LinkedList, can use two pointers
    }
}
