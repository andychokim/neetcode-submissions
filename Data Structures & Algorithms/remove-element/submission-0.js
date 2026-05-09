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
            // use two pointers to record forwarding i and recording j

        // 1 0 1 0 4
        let swapi = 0;
        let k = nums.length;

        for (let i = 0; i < nums.length; i++) {
            if (nums[i] === val) {
                let temp = nums[swapi];
                nums[swapi] = nums[i];
                nums[i] = temp;
                swapi++;
                k--;
            }
        }
        
        for (let i = 0; i < swapi; i++) nums.shift();

        return k;
    }
}
