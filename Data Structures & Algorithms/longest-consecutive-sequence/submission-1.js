class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        // O(n) -> no sorting.
        // Dups don't matter -> use hashmap, <num, seq length> pair
        let res = 0;
        // let seqArray = new Array(nums.length);
        let seqMap = new Map();
        for (let num of nums) {
            seqMap.set(num, 1);
        }

        for (let [key, value] of seqMap) {
            let seqLength = value;
            while (seqMap.has(key + 1)) {
                seqLength++;
                key++;
            }
            if (seqLength > res) res = seqLength;
        }

        return res;
    }
}
