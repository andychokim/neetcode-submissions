class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        // this is a hashmap problem because we need to save two information;
        // the 'num' and its index.
        // we need each of 'num' to find the returning value 'index'
        // hashmap allows O(1) search of a specific 'num' and its corresponding 'index' value

        // utilize <num, index> key value pairs for O(n) search
        const numsMap = new Map();
        for (let i = 0; i < nums.length; i++) {
            if (!numsMap.has(nums[i])) numsMap.set(nums[i], []);
            numsMap.get(nums[i]).push(i);
        }

        // iterate through each key in the map to find the answer pair
        for (const [key, value] of numsMap) {
            let secondKey = (target - key);

            if (numsMap.has(secondKey)) {
                if (key === secondKey && value.length > 1) return [value[0], value[1]]; // in case its a pair of itself
                if (key != secondKey) return [value[0], numsMap.get(secondKey)[0]];
            }
        }
    }
}
