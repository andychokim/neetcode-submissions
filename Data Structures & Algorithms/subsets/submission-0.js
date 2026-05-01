class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        // signs: all possible subsets, no duplicates
        // pattern: DFS (post-order), Set
            // DFS for post-order node search, Set for dup prevention
        // ** can't use top-down: changing the original array as we go down
            // checking for duplicates of array takes at least O(n),
            // making the whole process go O(n^2)
        // ** bottom-up: prevents addition of duplicates on its own, O(n) guaranteed
        // ** array.push() returns a new length, after mutating the array!
        
        // use helper for keeping the set's information
        let res = new Array();
        this.helper(nums, 0, new Array(), res);

        return res;
    }

    // takes nums, position(i), subset holder, and res to push the subsets
    // returns nothing; just pushes to res as we reach the deepest tree level
    helper(nums, i, subset, res) {
        // DFS pre-order

        // base
            // return all if i === array.length
        // at each node, I..
            // push array[i]
            // pop the push
            // i++
        // then I pass down
            // helper(pushed_array, i, res)
            // helper(not_pushed_array, i, res)
        
        // base
        if (i === nums.length) {
            res.push(Array.from(subset));
            return;
        }

        // recursion
        subset.push(nums[i]);
        // can't put i++ since it increments AFTER passing the current i value
        this.helper(nums, i+1, subset, res);
        subset.pop(); // undo the mutation -> backtracking
        this.helper(nums, i+1, subset, res);
    }
}
