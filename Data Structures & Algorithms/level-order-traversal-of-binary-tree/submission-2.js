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
            // at here, queue is full of same-level nodes, copy the queue.
            let queueCopy = queue;
            queue = new Array();
            let sameLevelNodesHolder = new Array(); // temp holder array

            while (queueCopy.length > 0) {
                let curNode = queueCopy.shift();
                // shifting the same level nodes one at a time - record it
                sameLevelNodesHolder.push(curNode.val);

                if (curNode.left) queue.push(curNode.left);
                if (curNode.right) queue.push(curNode.right);
                // at here queue is filled up with next-level nodes (same level)
            }
            // push the recorded holder array to res
            res.push(sameLevelNodesHolder);
        }
        return res;

        // ** BFS = queue based store/shift traversal
        // ** for level grouping: snapshot the queue at the START of each iteration
        //    (it contains exactly one level's worth of nodes at that moment)
        // ** a level ends at the rightmost node — that's when the snapshot is exhausted
    }
}
