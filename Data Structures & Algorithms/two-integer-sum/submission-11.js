class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        // hashmap to store each num (as key) and its index (as value)
        const numsMap = new Map();
        for (let i = 0; i < nums.length; i++) {
            if (numsMap.has(nums[i])) numsMap.get(nums[i]).push(i);
            else numsMap.set(nums[i], [i]);
        }
        console.log(numsMap);

        for (let [key, value] of numsMap) {
            const secondKey = (target - key);

            if (numsMap.has(secondKey)) {
                if (value.length > 1) return [value[0], value[1]];
                if (value[0] != numsMap.get(secondKey)[0]) return [value[0], numsMap.get(secondKey)[0]];
            }
        }
    }
}
