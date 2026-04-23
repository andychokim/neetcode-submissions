class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        // two pointers - window
        // looking for "sequence" can be done in windows usually

        // setup left, a map for <char, count> pairs, and top frequent counter
        // start for loop with right set as 0. for each right index, 
            // map.set(s[right], (map.get(s[right]) || 0) + 1)
            // freq counter update counter = Math.max(counter, map.get(s[right]))
            // **if ((r-l+1) - counter) > k, then..
                // WHILE it is so..
                    // map.set(s[left], map.get(s[left]) - 1);
                    // left++ 

        let res = 0;
        let left = 0;
        let map = new Map();
        let maxf = 0;
        
        for (let right = 0; right < s.length; right++) {
            let rc = s[right];
            map.set(rc, (map.get(rc) || 0) + 1);
            maxf = Math.max(maxf, map.get(rc));

            while ((right - left + 1) - maxf > k) {
                map.set(s[left], map.get(s[left]) - 1);
                left++;
            }
            res = Math.max(res, (right - left + 1));
        }
        return res;

        // **The number of replacements is equal to the difference between 
        // the seqLen and the frequency of the most frequent character in the seq.
            // optimization: update to the maxf counter DOES NOT NEED TO OCCUR.
            // since we only want the "length" of the longest frequency, the deduction
            // coming from incrementing left index should be good enough.
            // ex: for sample2, even if there happened to be 5 Bs later, that update still
            // would have happened, impacting the final result. So reduction count is not
            // necessary
        // **since we have two pointers for beginning and end, we don't have to keep
        // tracking the seqLen separately - its just (right-left+1)

        // time: O(n), n: s.length; -> optimal
    }
}
