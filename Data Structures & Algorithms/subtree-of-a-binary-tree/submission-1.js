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
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSubtree(root, subRoot) {
        // ** binary tree does not have dup values within itself

        // DFS search for subroot - post order
        // base case - if a child is null
            // return false -> no more subtree, so no subroot possible
        // I hand off "Does the subtree have a subroot?"
            // to left child
            // to right child
        // once I get both values
            // if root.val === subRoot.val, return checker result
            // return left OR right
        
        // base case
        if (!root) return false

        // recursion
        let left = this.isSubtree(root.left, subRoot);
        let right = this.isSubtree(root.right, subRoot);

        if (root.val === subRoot.val) {
            return (this.checker(root, subRoot) || (left || right));
        } 
        else return (left || right);
    }

    checker(root, subRoot) {
        // DFS checker - post order
        // base case - if any child is null
            // if one isn't return false
            // if both are return true
        // I hand off "Is the node same as subroot's current node?"
            // to both left children
            // to both right children
        // once I get both
            // return (left AND right) AND root.val === subRoot.val

        // base case
        if ((!root && subRoot) || (root && !subRoot)) return false;
        if (!root && !subRoot) return true;

        // recursive case
        let left = this.checker(root.left, subRoot.left);
        let right = this.checker(root.right, subRoot.right);

        return ((left && right) && root.val === subRoot.val);
    }
}
