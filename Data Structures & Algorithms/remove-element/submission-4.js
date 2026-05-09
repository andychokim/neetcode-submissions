class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums, val) {
        // signs: remove in-place, order does not matter
        // pattern: two pointers (swap), queue
            // brute forcing - O(n^2)
            // use queue(or stack) to make the process O(n)
            // use two pointers to record forwarding i and the slower swapi

        // 0 1 1 0 4
        let swapi = 0;
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] === val) {
                let temp = nums[swapi];
                nums[swapi] = nums[i];
                nums[i] = temp;
                swapi++;
            }
        }
        
        for (let i = 0; i < swapi; i++) nums.shift();

        return nums.length;

        // O(2n) = O(n)
    }
}
