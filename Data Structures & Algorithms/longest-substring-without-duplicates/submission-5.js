class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        // two pointers, starting from the same point.
        // for dup checking, use a Set as well
        let res = 0;
        let left = 0;
        let curSeqLen = 0;
        let dupSet = new Set();

        for (let right = 0; right < s.length; right++) {
            // if left and right are same chars
            if (dupSet.has(s[right])) {
                // update res
                res = Math.max(res, curSeqLen);

                // if left < right, move left until its not same as right
                // update cruSeqLen accordingly
                while (dupSet.has(s[right]) && left < right) {
                    dupSet.delete(s[left]);
                    left++;
                    curSeqLen--;
                }
            }
            dupSet.add(s[right]);
            curSeqLen++;
        }
        // update res once again for any changes after reaching EOL
        res = Math.max(res, curSeqLen);

        return res;

        // **for window, DOUBLE CHECK on conditions for increasing and stopping left.
        // **DOUBLE CHECK THE CONSTRAINTS
    }
}
