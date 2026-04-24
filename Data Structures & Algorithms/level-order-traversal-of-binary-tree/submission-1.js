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
        let queue = new Array(); // for BFS traversing

        if (root) queue.push(root);
        while (queue.length > 0) {
            let queueCopy = queue;
            queue = new Array();
            let sameLevelNodesHolder = new Array(); // for recording nodes in each level - arrays to fill res up

            while (queueCopy.length > 0) {
                let curNode = queueCopy.shift();
                sameLevelNodesHolder.push(curNode.val);

                if (curNode.left) queue.push(curNode.left);
                if (curNode.right) queue.push(curNode.right);
            }
            res.push(sameLevelNodesHolder);
        }
        return res;

        // **BFS traversing itself IS the queue based storing/shifting(popping)
        // to record all the nodes in each level and group them "by level", use
        // copy of the queue to restrict the traverse "per level"
    }
}
