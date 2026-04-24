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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {boolean}
     */
    isSameTree(p, q) {
        // post-order DFS
        // I hand off "Are the left and right subtrees of two Trees the same?"
            // to left child
            // to right child
                // if a child is null, 
                    // if other tree's child is also null, return true
                    // else return false
        // Once I receive (T/F) from both children
            // return (left result AND right result) (if one is false, its all false)
        
        // base - null child scenario
        if ((!p && q) || (p && !q)) return false;
        if (!p && !q) return true;

        // recursion
        let left = this.isSameTree(p.left, q.left);
        let right = this.isSameTree(p.right, q.right);

        return (left && right) && (p.val === q.val);
    }
}
