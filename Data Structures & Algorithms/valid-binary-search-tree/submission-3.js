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
     * @return {boolean}
     */
    isValidBST(root) {
        // DFS traverse while checking the conditions
        // pre-order, need each parent node's information to setup the boundary for child node
        
        return this.isValidBSTHelper(root, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY);

        // ** when a question is related to the tree of specific character,
        // don't ignore it - utilize it for easier solution
        // ** BST -> each node has different MIN and MAX bounds.
    }

    isValidBSTHelper(root, min, max) {
        // base
            // null node -> satisfies BST, return true
            // failing condition -> return false
        // at each node, calculate new boundary for next children
        // pass the "new boundaries"
            // to left
            // to right
        
        // base
        if (!root) return true;
        if ((root.val >= max) || (root.val <= min)) return false;

        // recursion
        return (this.isValidBSTHelper(root.left, min, root.val) && this.isValidBSTHelper(root.right, root.val, max));
    }
}
