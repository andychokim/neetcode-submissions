class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        // signs: all unique combinations
        // pattern: DFS bottom-up
            // recursive iteration to find all combinations
            // n <= 20 --> 2^n
        
        // bottom-up from index=0 to nums.length-1 
            // to prevent duplicates
        
        let res = new Array();
        for (let i = 0; i < nums.length; i++) {
            let holder = new Array();
            this.combFinder(nums, target, i, holder, 0, res);
        }

        return res;
    }

    // DFS combination finder
    combFinder(nums, target, index, holder, sum, res) {
        // bottom-up DFS
        // base cases
            // if sum > target, return; -> no push
        // at each node
            // holder.push(nums[index])
            // sum += nums[index];
            // if sum === target, res.push(holder) then return;
        // pass down
            // for (let i = index; i < nums.length-1; i++) {
            //     combFinder(nums, target, i, holder, sum, res) 
            // }
        

        // base cases
        if ((sum + nums[index]) > target) return;

        // recursion
        // at each node, push current nums[index] into holder and sum
        holder.push(nums[index]);
        sum += nums[index];
        if (sum === target) res.push(Array.from(holder));
        // pass down
        for (let i = index; i < nums.length; i++) {
            this.combFinder(nums, target, i, holder, sum, res);
        }
        // pop for backtracking
            // if I don't pop and re turn sum to normal, it'll keep 
            // the holder and sum's form and continue its loop
        sum -= holder.pop();

        return;
    }
}
