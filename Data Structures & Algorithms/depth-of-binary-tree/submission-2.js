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
     * @return {number}
     */
    maxDepth(root) {
        // post-order DFS to find the longest path (depth) from the root node
        // I hand off 
            // base case: counter = 0 if null
        // Once both come back, I will
            // Math.max(received counters) + 1
            // then hand that off
        
        // base case:
        if (!root) return 0;

        // recursive case:
        let leftMax = this.maxDepth(root.left);
        let rightMax = this.maxDepth(root.right);
        
        return Math.max(leftMax, rightMax) + 1;
    }
}
