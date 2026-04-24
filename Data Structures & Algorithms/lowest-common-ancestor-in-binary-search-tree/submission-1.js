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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {TreeNode}
     */
    lowestCommonAncestor(root, p, q) {
        // BST - so we can be more efficient with p and q search

        // DFS pre-order approach (to pre-determine the direction to traverse)
        // base condition - if the node is a null
            // return empty?
        // at each node, I do - comparing root.val to p and q
            // if root.val is in between (inclusive) of p and q
                // found LCA -> return it
            // if root.val is bigger than Math.max(p, q)
                // go left
            // if root.val is smaller than Math.min(p, q)
                // go right
        // then I pass - direction to traverse
            // if go left -> go left
            // if go right -> go right
        
        // base
        if (!root) return;

        // recursion
        if (root.val > Math.max(p.val, q.val)) return this.lowestCommonAncestor(root.left, p, q);
        else if (root.val < Math.min(p.val, q.val)) return this.lowestCommonAncestor(root.right, p, q);
        else return root;

        // **pre-order works easier since we CAN judge the direction to proceed with DFS
        // WITH the information in current node. -> info first, action based on it
        // **post-order would work better if we need the children nodes' information for
        // finding the CURRENT node's answer. -> action first, info based on it
    }
}
