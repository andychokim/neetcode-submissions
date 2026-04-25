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
     * @return {void}
     */
    reorderList(head) {
        // node's next --> node's next.next | only the first half nodes
            // can find middle point with Floyd's -> where slow is at while fast stops.
        // if we make a reversed copy of the linked list, can "merge" the two lists
        //  

        // 1 2 /reverse/ 4 3
        // ^(keep one)   ^(prev)

        // 1 4 2 3 (end)
        
        // edgecase
        if (!head.next) return head;

        // Floyd's algorithm (modified for finding mid point)
        let slow = head;
        let fast = head.next;
        while (fast && fast.next) {
            fast = fast.next.next;
            slow = slow.next;
        }
        // slow pointer should be at the middle of the list right now
        // console.log(slow, '\n')
        // reverse starting from the slow.next
        let prev = null;
        let curr = slow.next;
        slow.next = null; // cut the list into half - head->slow, slow.next->tail
        while (curr) {
            let temp = curr.next;
            curr.next = prev;
            prev = curr;
            curr = temp;
        }
        // reversed later half is merged
        // console.log(prev, '\n');
        // now we have various pointers -> reorganize it
        let first = head;
        let second = prev; // prev is where the reversing begins
        while (second) {
            let temp1 = first.next;
            let temp2 = second.next;

            first.next = second;
            second.next = temp1;

            first = temp1;
            second = temp2;
        }
        // console.log(head);
        // 1 2 3 and 4 3

        // ** mid-point doesn't need to be strict on this question since 
        // for 1 2 3 4 5 ex, if mid was at 3 so 1 2 3 5 4 after merging,
        // well still have pointers as this:    ^     ^
        // then do 1 5 2 4 3
        //         ^ ^
        // or if mid was at 2 so 1 2 5 4 3,
        // we will have          ^   ^
        // and have 1 5 2 4 3
        //          ^ ^
        // same result.

        // ex: 1 2 4 3 and 1 2 3 4
        //     ^   ^       ^     ^
        // res 1 4 2 3 and 1 4 2 3
        
        // it was more of "do we get to setup a pointer at mid-point" than
        // "do we have a precise mid-point".
    }
}
