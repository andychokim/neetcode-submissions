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
        // post-order, because we need the children's value information to tell if 
            // the BST condition is failing or not.
        // need to keep checking of possible min and max values for each node
            // make a helper function for managing those values as parameters
        
        return this.isValidBSTHelper(root, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY);
    }

    isValidBSTHelper(root, min, max) {
        // DFS post-order?

        // base
            // null node -> satisfies BST, return true
        // pass "adjusted min and max parameter"
            // to left
            // to right
        // with the gathered answers, at each node
            // check if BST fails at this node or not
        
        
        // base
        if (!root) return true;

        // recursion
        let left = this.isValidBSTHelper(root.left, min, root.val);
        let right = this.isValidBSTHelper(root.right, root.val, max);

        if ((root.val >= max) || (root.val <= min)) return false;
        return (left && right);
    }

}
