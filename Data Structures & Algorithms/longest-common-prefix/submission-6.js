class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        // signs: longest "matching" sequence
        // pattern: sort by length, window sliding - for concurrent character matching

        // the version above may cause the following issue:
            // if str[0] and str[1] share longer prefix only for themselves
      
        // fixed: brute forcing (matching)
        let res = "";
        strs = strs.sort((x,y) => (x.length - y.length));

        const first = strs[0];
        for (let i = 0; i < strs.length; i++) {
            const second = strs[i];
            let holder = "";
            // no while loop
                // could cause an infinite loop if first and second match exactly
            for (let j = 0; j < first.length; j++) {
                if (first[j] !== second[j]) break;
                holder += first[j];
            }
            if (((res === "") && (holder !== "")) ||
                ((res !== "") && (holder.length < res.length))) res = holder;
        }
 
        return res;
    }
}
