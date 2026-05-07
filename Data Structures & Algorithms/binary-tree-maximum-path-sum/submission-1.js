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
    maxPathSum(root) {
        // signs: maximum path sum
        // pattern: post-dfs(traversal),

        let separateMax = new Array();
        let relativeMax = this.dfs(root, Number.NEGATIVE_INFINITY, separateMax);

        return Math.max(relativeMax, separateMax[0]);
    }
    
    // 
    dfs(root, max, stack) {
        // dfs traversal for finding the sum, post-traversal
        // we go all the way left first, find the maximums at each subtree, and
            // return the found max to its parent node

        // base case
        // if we reached null node, return the current max
        if (!root) return max;

        // recursive case
        // pass down left/right child, collect each subtree's Max
        let leftMax = this.dfs(root.left, max, stack);
        let rightMax = this.dfs(root.right, max, stack);

        // once retrieved, find the max at current node
        let connectingMax = Math.max(root.val, root.val + leftMax, root.val + rightMax);
        let separateMax = Math.max(leftMax, rightMax, root.val + leftMax + rightMax);

        // if max was a split - push to stack instead
        if (stack.length === 0) stack.push(separateMax);
        else if (separateMax > stack[0]) {
            stack.pop();
            stack.push(separateMax);
        }

        // finally, return the new max - compare with old max
        return Math.max(connectingMax, max);
    }
}
