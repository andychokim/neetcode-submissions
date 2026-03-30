class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        // first, create hashmap for storing <num, count> data pairs
        // second, create nums.length-indexed empty array (bucket)

        const numsMap = new Map();
        for (let num of nums) {
            numsMap.set(num, (numsMap.get(num) || 0) + 1);
        }

        const numsBucket = new Array(nums.length+1);
        for (let i = 0; i < numsBucket.length; i++) {
            numsBucket[i] = new Array();
        }
        for (const [key,value] of numsMap) {
            numsBucket[value].push(key);
        }
        console.log(numsBucket);

        const res = new Array();
        for (let i = numsBucket.length-1; i > -1; i--) {
            for (let num of numsBucket[i]) {
                res.push(num);
                if (res.length === k) return res;
            }
        }
    }
}
