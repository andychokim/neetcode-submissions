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
     * @return {number[][]}
     */
    levelOrder(root) {
        // BFS - record the nodes' values in each level while traversing through them
        let res = new Array();
        if (!root) return res; // if root === [];

        let temp = new Array(); // for recording nodes in each level - arrays to fill res up
        let queue = new Array(); // for BFS traversing

        queue.push(root);
        temp.push(root.val);
        res.push(temp);
        while (queue.length > 0) {
            let sameLevelNodesHolder = queue;
            queue = new Array();
            temp = new Array();
            while (sameLevelNodesHolder.length > 0){
                let curRoot = sameLevelNodesHolder.shift();

                if (curRoot.left) {
                    queue.push(curRoot.left);
                    temp.push(curRoot.left.val);
                }
                if (curRoot.right) {
                    queue.push(curRoot.right);
                    temp.push(curRoot.right.val);
                }
            }
            if (queue.length !== 0) res.push(temp);
        }
        return res;
    }
}
