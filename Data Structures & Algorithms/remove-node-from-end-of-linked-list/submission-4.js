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
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        // multi steps:
        // reverse the list
        // remove the nth node (now it'll be from the start)
            // use for loop to reach to the nth node
                // while traversing, recorde prevNode.
            // let prevNode = null;
            // for (let i = 1; i < n; i++) {
            //      prevNode = head;
            //      head = head.next
            // }
            // prevNode.next = head.next;
            // cutting should actually be a redirection of prevNode to curr.next
        // reverse the list again

        // edge case:
        if (!head.next && n === 1) return null;

        // first reversing
        let prev = null;
        let curr = head;
        while (curr) {
            let temp = curr.next;
            curr.next = prev;
            prev = curr;
            curr = temp;
        }
        // prev holding |2| 1
        let dummy = new ListNode(); // dummy for the case of n = 1 (extra spot)
        dummy.next = prev; // save the head ptr of reversed list in prehand

        // nth node removal
        let prevNode = dummy;
        for (let i = 1; i < n; i++) {
            prevNode = prev;
            prev = prev.next;
        }
        prevNode.next = prev.next; // null -> 1
        // nth node removed - prev pointer also removed

        // reverse the list again
        prev = null;
        curr = dummy.next; // start again from the actual list.
        while (curr) {
            let temp = curr.next;
            curr.next = prev;
            prev = curr;
            curr = temp;
        }
        return prev;
    }
}
