class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        // two pointer - window pattern
        // utilize Set for each unique character

        let res = 0;
        let set = new Set(s); // a set initilized with the string s

        // for each unique character within the string,
        for (let char of set) {
            let charCount = 0;
            let left = 0; // reset left position per window sliding
            // window loop
            for (let right = 0; right < s.length; right++) {
                if (s[right] === char) charCount++;

                // too many "unreplacable" different characters within seqLen
                while ((right - left + 1) - charCount > k) {
                    if (s[left] === char) charCount--;
                    left++;
                }
                res = Math.max(res, (right-left+1));
            }
        }
        return res;
    }
}
