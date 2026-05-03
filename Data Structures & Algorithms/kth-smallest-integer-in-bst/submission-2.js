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
        let holder = new Array();
        this.helper(root, k, holder);

        if (holder.length > 0) return holder[0];
        return -1;
    }

    helper(root, k, holder) {
        // base case
        if (!root) return k;

        // recursion
        k = this.helper(root.left, k, holder);
        k--;
        if (k === 0) holder.push(root.val);
        k = this.helper(root.right, k, holder);

        if (k === 0) holder.push(root.val);
        return k;
    }

}
