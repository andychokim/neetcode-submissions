/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @param {number} k
     * @return {number}
     */
    kthSmallest(root, k) {
        let ctr = new Array();
        ctr.push(k);

        return this.helper(root, ctr);
    }

    helper(root, ctr) {
        // ** optimal - instead of puhsing the right node into holder,
        // manage the counter inside an array.

        // base case
        if (!root) return;

        // recursion
        let val = null;
        val = this.helper(root.left, ctr);
        if (val) return val;

        ctr[0]--;
        if (ctr[0] === 0) return root.val;

        val = this.helper(root.right, ctr);
        if (val) return val;
    }

}
