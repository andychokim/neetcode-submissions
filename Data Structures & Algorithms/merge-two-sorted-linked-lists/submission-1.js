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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        // make a new ListNode to layout the merged list
        // save a pointer at the head of this new ListNode (to return it later)

        // until list1 and list2 are both not null..
            // if (list1 < list2)
                // newLN.next = list1
                // list1 = list1.next
            // else
                // newLN.next = list2
                // list2 = list2.next
            // newLN = newLN.next
        // once out, if there is a list1 leftover
            // newLN.next = list1
        // else if list2 leftover
            // newLN.next = list2
        // return res.next -> res is the initially saved head pointer of newLN

        let head = new ListNode();
        let res = head;

        while (list1 && list2) {
            if (list1.val < list2.val) {
                head.next = list1;
                list1 = list1.next;
            }
            else {
                head.next = list2;
                list2 = list2.next;
            }
            head = head.next;
        }
        if (list1) head.next = list1;
        if (list2) head.next = list2;

        return res.next;

        // ** making a new ListNode is always an extra O(1)!!!
    }
}
