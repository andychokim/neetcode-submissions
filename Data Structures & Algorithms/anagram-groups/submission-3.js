class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        // same time complexity, but less process
        // can skip the second iteration with .values().toArray()
            // note: .values() returns Iterator type

        let sortedMap = new Map();

        for (let str of strs) {
            let key = str.split('').sort().join('');
            if (sortedMap.has(key)) sortedMap.get(key).push(str);
            else sortedMap.set(key, [str]);
        }

        return sortedMap.values().toArray();
    }
}
