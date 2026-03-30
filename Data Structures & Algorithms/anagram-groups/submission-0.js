class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        // anagrams are identical to each other when "sorted"
        if (strs.length === 1) return [[strs[0]]];

        let result = new Array();
        let idxMap = new Map();

        // 1: "sort" each word in strs
        // time: O(n = strs.length)
        for (let i = 0; i < strs.length; i++) {
            let sorted = strs[i].split('').sort().join('');

            // 2: per each sorted word, put its index into the map
            if (idxMap.has(sorted)) idxMap.get(sorted).push(i);
            else idxMap.set(sorted, [i]);
        }
        
        // 3: using the saved indices, form a grouped array and push to result
        // time: O(n = strs.length)
        for (let [key, values] of idxMap) {
            let anagrams = new Array();

            for (let idx of values) {
                anagrams.push(strs[idx]);
            }

            result.push(anagrams);
        }

        // 4: return
        // time: O(2n) = O(n)
        return result;
    }
}
