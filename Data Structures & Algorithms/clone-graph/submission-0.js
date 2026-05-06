/**
 * // Definition for a Node.
 * class Node {
 *     constructor(val = 0, neighbors = []) {
 *       this.val = val;
 *       this.neighbors = neighbors;
 *     }
 * }
 */

class Solution {
    /**
     * @param {Node} node
     * @return {Node}
     */
    cloneGraph(node) {
        // signs: cloning, recursive adjacency, no duplicates
        // patterns: bottom-up DFS, hashmap

        return this.copyGraph(node, new Map());
    }

    copyGraph(node, graph) {
        // bottom-up DFS

        // base cases
        // if current node is null, return null
        if (!node) return null;
        // if current node is already visited, return the corresponding copyNode
        if (graph.has(node)) return graph.get(node);

        // at each node (edge)
        // copy its info <node, nodeCopy> into the map
            // ** can't just put og.val and og.neighbors -> both are REFERENCES
            // putting the original node as a key -> marking "visited"
        let nodeCopy = new Node(node.val);
        graph.set(node, nodeCopy);

        // pass down
        // for each of the current edge's neighbors
            // push to the nodeCopy.neighbors
        for (let neighbor of node.neighbors) {
            graph.get(node).neighbors.push(this.copyGraph(neighbor, graph));
        }

        // final - return the "neighbor" added nodeCopy back to where it came from
            // most likely from the "for loop" call above
        return graph.get(node);
    }
}
