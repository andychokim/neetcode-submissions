class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        // initial approach: O(n^2)
        // using nested loop, calculate output[i] one-by-one

        // 2*4*6, 1*4*6, 1*2*6, 1*2*4
        // (def: 1)1, ((i-1): 1*def: 1)1, ((i-1): 2*pre: 1)2 ((i-1): 4*pre: 2)8
            // 1 1*1=1 2*1=2 4*2=8
            // after the loop: !2 !4 !6, 1 !4 !6, 1 2 !6, 1 2 4(done) 
        // () ((i+1): 4*ae: 1*suf: 6) ((i+1): 6*ae: 2*suf())12 (def: 1*already existing: 8)8
            // 2*24=48 4*6=24 6*2=12 8
        
        let result = new Array(nums.length);

        let prefix = 1;
        for (let i = 0; i < nums.length; i++) {
            result[i] = prefix;
            prefix = nums[i] * prefix;
        }

        let suffix = 1;
        for (let i = nums.length-1; i > -1; i--) {
            result[i] = result[i] * suffix; // since result[i] already has prefix mults
            suffix = nums[i] * suffix;
        }

        return result;
    }
}
