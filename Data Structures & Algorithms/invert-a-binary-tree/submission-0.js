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
     * @return {TreeNode}
     */
    invertTree(root) {
        // tree inverting
        // idea: DFS - recursion

        // base case:
        if (!root) return root;

        // recursive case:
        let temp = root.right;
        root.right = root.left;
        root.left = temp;

        this.invertTree(root.left);
        this.invertTree(root.right);
        return root;
    }
}
