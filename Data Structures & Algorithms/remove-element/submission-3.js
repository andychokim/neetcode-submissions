class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums, val) {
        // faster solution - O(n) with only one loop
        // ** what's important is not actually "removing" val(s).
            // its about "first k elements of nums not equal to val"

        // instead of "swapping", can just "replace" the index with val to
        // the next non-val value
        // to do this, have the slow runner stay on "val"
        // and check for any "non-val" indexes to switch with nums[slow runner]
            // if the slow runner is at "val", it'll become slow as much
        let k = 0;
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] !== val) {
                nums[k] = nums[i];
                k++; // count the number of "safe" indices
            }
        } 
        return k
    }
}
