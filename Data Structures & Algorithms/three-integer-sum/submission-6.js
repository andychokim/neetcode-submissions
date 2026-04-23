class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        // to solve it with O(1) space, use three pointers
        // sort the nums list first for easier pointer usage
        // -4 -1 -1 0 1 2
        // the i index can only move furthur to left - thanks to the sorted list
            // if i keeps moving left until different number appears

        let res = new Array();
        let sorted = nums.sort((x, y) => x - y);

        for (let i = 0; i < sorted.length - 2; i++) {
            if (i > 0) while (sorted[i - 1] === sorted[i]) i++; // dup preventor
            
            let j = i + 1;
            let k = sorted.length - 1;

            while (j < k) {
                let sum = sorted[i] + sorted[j] + sorted[k];
                if (sum > 0) k--;
                else if (sum < 0) j++;
                else {
                    res.push([sorted[i], sorted[j], sorted[k]]);
                    j++; // or k--, doesn't matter;
                    while (sorted[j - 1] === sorted[j]) j++; // dup preventor
                }
            }
        }
        return res;

        // time: O(n^2) - nested loop. n: nums.length
        // space: O(1) - only three pointer variables
        // **thanks to sorted, every unique i or j can bring unique triplet.
    }
}
