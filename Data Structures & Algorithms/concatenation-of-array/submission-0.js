class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        // signs: concatenation
        // pattern: array - O(n), n: nums.length

        const n = nums.length;        
        const res = new Array(2*n);
        for (let i = 0; i < n; i++) {
            res[i] = nums[i];
            res[i+n] = nums[i];
        }
        return res;
    }
}
