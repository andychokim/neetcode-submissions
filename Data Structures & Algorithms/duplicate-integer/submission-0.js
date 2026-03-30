class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        // use Set to record each unique number as a Key
        const numsSet = new Set();

        for (let num of nums) {
            if (numsSet.has(num)) return true;
            numsSet.add(num);
        }

        return false;
    }
}
