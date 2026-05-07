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
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1, l2) {
        // signs: linkedlist
        // pattern: linked list

        // collect each digit from l1 and l2 in reversed order
        // sum the coverted l1 and l2
        // in reverse order, make a linked list out of the sum
        // ---------------------------------------------------- ^^ no cheap way
        // 

        let res = new ListNode();

        let h1 = l1;
        let h2 = l2;
        let head = res;
        
        while(h1 && h2) {
            let sum = h1.val + h2.val;

            let sumString = sum.toString();
            if (sumString.length > 1) {
                head.next = new ListNode(Number(sumString[1]));
                head = head.next;

                if (h1.next) h1.next.val += 1;
                else if (h2.next) h2.next.val += 1;
                else {
                    head.next = new ListNode(Number(sumString[0]));
                    head = head.next;
                }
            }
            else {
                head.next = new ListNode(sum);
                head = head.next;
            }

            h1 = h1.next;
            h2 = h2.next;
        }
        console.log(h1, h2, head)

        while (h1) {
            let h1String = h1.val.toString();
            if (h1String.length > 1) {
                head.next = new ListNode(Number(h1String[1]));
                head = head.next;

                if (h1.next) h1.next.val += 1;
                else {
                    head.next = new ListNode(Number(h1String[0]));
                    head = head.next;
                }
            }
            else {
                head.next = h1;
                head = head.next;
            }

            h1 = h1.next;
        }

        while (h2) {
            let h2String = h2.val.toString();
            if (h2String.length > 1) {
                head.next = new ListNode(Number(h2String[1]));
                head = head.next;

                if (h2.next) h2.next.val += 1;
                else {
                    head.next = new ListNode(Number(h2String[0]));
                    head = head.next;
                }
            }
            else {
                head.next = h2;
                head = head.next;
            }

            h2 = h2.next;
        }

        return res.next;
    }
}
