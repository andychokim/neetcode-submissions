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
        // if a child is null, (base case)
            // its an end, so return 0
        // I hand off "What's the max depth of your subtree"
            // to left child
            // to right child
        // Once both come back, I will
            // return Math.max(left, right) + 1
        
        // base case:
        if (!root) return 0;

        // recursive case:
        let leftMax = this.maxDepth(root.left);
        let rightMax = this.maxDepth(root.right);

        return Math.max(leftMax, rightMax) + 1;
    }
}
