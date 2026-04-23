class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        // searching for two numbers in 'sorted' list -> can use two pointers
        // one left, one right
        // if sum > target, decrease the sum (right--)
        // if sum < target, increase the sum (left++)
        // else return!

        let left = 0;
        let right = numbers.length - 1;
        // since we want i1 < i2
        while (left < right) {
            if (numbers[left] + numbers[right] === target) {
                return [(left + 1), (right + 1)];
            }
            if (numbers[left] + numbers[right] > target) right--;
            else left++;
        }

        // time: O(n/2) - O(n)
        // space: O(1) (only using two pointer variables)
    }
}
