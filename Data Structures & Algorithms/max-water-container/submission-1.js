class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        // can't sort.
        // set two pointers for calculating the base length - left and right

        let left = 0;
        let right = heights.length - 1;
        let res = 0;

        while (left < right) {
            let area = Math.min(heights[left], heights[right]) * (right - left);
            res = Math.max(res, area);

            // to try out other possible solutions, move the smaller wall index
            if (heights[left] < heights[right]) left++;
            else right--;
        }
        return res;
    }
}
