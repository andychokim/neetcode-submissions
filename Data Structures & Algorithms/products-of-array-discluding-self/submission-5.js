class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        // brute forcing - O(n*(n-1)) = O(n^2)
            // save time by utlizing pre-calculated values
        // go left to right, then right to left, to run calculation as we go - O(n)
        // buckets = prefix and suffix, a prefix and suffix calculated value holders.

        let prefix = 1;
        let res = new Array(nums.length);
        res[0] = prefix;

        for (let i = 1; i < nums.length; i++) {
            prefix = prefix * nums[i-1];
            res[i] = prefix;
        }
        // res: 1 1 2 8
        // console.log(res);
        let suffix = 1;
        for (let i = nums.length - 2; i > -1; i--) {
            suffix = suffix * nums[i+1];
            res[i] = suffix * res[i];
        }
        // console.log(res);
        return res;

        // time: O(2n) = O(n), n: nums.length
        // space: O(1) - only extra space is for the returning variable
    }
}
