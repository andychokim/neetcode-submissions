class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        // could use hashmap; each unique num (as key) and its occurrence count (as value)
            // can "sort" the hashmap but O(n logn)
            // instead, use "bucket" algo
                // uses an additional "bucket" 2d array

        const bucket = new Array(nums.length + 1); // each index means the occurrence of the num(s) within
        for (let i = 0; i < bucket.length; i++) {
            bucket[i] = new Array();
        }
        console.log(bucket);
        const numsMap = new Map();
        for (let num of nums) {
            numsMap.set(num, (numsMap.get(num) || 0) + 1);
        }
        console.log(numsMap);
        for (let [key,value] of numsMap) {
            bucket[value].push(key);
        }
        console.log(bucket);
        const res = new Array();
        for (let i = bucket.length - 1; i > 0; i--) {
            for (let num of bucket[i]) {
                res.push(num);
                if (res.length === k) {
                    return res;
                }
            }
        }
    }
}
