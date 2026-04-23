class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        // bucket array of <num, occurrence>
        // can put each unique 'num' in its 'occurrence' index in new array
        
        let res = new Array();
        let bucket = new Array(nums.length + 1); // so we can have index number of length count

        let countMap = new Map();
        for (let num of nums) {
            if (!countMap.has(num)) countMap.set(num, 0)
            countMap.set(num, countMap.get(num) + 1);
        }

        for (let [key, value] of countMap) {
            if (!bucket[value]) bucket[value] = new Array();
            bucket[value].push(key);
        }

        for (let i = bucket.length - 1; i > 0; i--) {
            if (!bucket[i]) continue;
            for (let j = 0; j < bucket[i].length;  j++) {
                res.push(bucket[i][j]);
                if (res.length === k) return res;
            }
        }
    }
}
