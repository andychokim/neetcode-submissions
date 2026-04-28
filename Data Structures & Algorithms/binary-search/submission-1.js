class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        // signs: sorted array, searching for a number
        // pattern: binary search
            // array is sorted -> i can search for a number by changing window
        
        let left = 0;
        let right = nums.length - 1;
        while (left <= right) {
            let mid = Math.floor((left + right) / 2);

            if (target > nums[mid]) left = mid + 1
            else if (target < nums[mid]) right = mid - 1;
            else if (target === nums[mid]) return mid;
        }
        return -1;
    }
}
