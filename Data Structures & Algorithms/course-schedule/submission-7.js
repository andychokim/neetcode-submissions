class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {
        // if (prerequisites.length === 0) return true;
        // signs: no dup, "cycle"
        // pattern: hashmap for "visited" + tree/dfs traversal

        // setup map of <course, prereq_courses> pairs
        const graph = new Map();
        for (let i = 0; i < numCourses; i++) graph.set(i, []);
        for (let [course, prereq] of prerequisites) graph.get(course).push(prereq);

        const visited = new Set();

        // in case if we have two separate graphs: for loop
        for (let [course, prereq] of graph) {
            if (!this.graphCheck(course, graph, visited)) return false;
        }
        return true;
    }

    // helper function for traversing the graph edges
    // takes the graph (hashmap) visited (hashset), and current course (int)
    // returns false/true depending on if the graph has a cycle or not, respectively
    // ** remove the visited "neighbors" to differentiate the 
        // 'loop' and 'dfs natural visit'
    graphCheck(course, graph, visited) {
        // base case:
        // if we "visited" this edge within the same dfs path, return false
        // if we arrived to a course with no prereqs, return true
        if (visited.has(course)) return false;
        if (graph.get(course).length === 0) return true;

        // recursion
        // at each node
        // check its' prereq course, then mark the course "visited"
        visited.add(course);
        const prereqs = graph.get(course);
        // pass down
        // the prereq course -> to next recursion
        for (let i = 0; i < prereqs.length; i++) {
            if (!this.graphCheck(prereqs[i], graph, visited)) return false
        }
        // un-visit the node (since we are getting out of this path)
        visited.delete(course);
        graph.set(course, []);

        // final return
        // by reaching this point, no courses have "failed" so far
        return true;
    }
}
