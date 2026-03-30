class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums) {
        let max = Number.NEGATIVE_INFINITY;
        let curSum = 0;
        
        for (let i = 0; i < nums.length; i++) {
            curSum += nums[i];

            if (curSum > max) {
                max = curSum;
            }
            if (curSum < 0) {
                curSum = 0;
            }
        }

        return max;
    }
}
