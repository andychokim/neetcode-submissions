class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canJump(nums) {
        // greedy algorithm

        let goalIdx = nums.length - 1;

        for (let i = nums.length - 2; i > -1; i--) {
            // 1: if nums[i] is greather than 0, check if it reaches the "next" idx
            if (nums[i] > 0) {
                if (i + nums[i] >= goalIdx) goalIdx = i;
            }
        }
        
        if (goalIdx === 0) return true;
        return false;
    }
}
