class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        // "sorting" array with hashmap
            // sorting for finding anagrams
            // hashmap for recording 2 unique infos together as a pair

        // iterate through strs, 
        // "sort" each str in a temporary holder
        // generate a <sorted str, index(array)> pair for each
        // iterate through the <str, index> pairs,
        // create an empty array (to be filled) per iteration
            // sub-iterate through the 'index' values,
            // fill up the array with the objs in 'strs' at 'index' index
        // put the filled up array in "response" 2D array.
        // return the "response"

        let res = new Array();
        let sortedMap = new Map();

        for (let i = 0; i < strs.length; i++) {
            let key = strs[i].split('').sort().join('');
            if (sortedMap.has(key)) sortedMap.get(key).push(i);
            else sortedMap.set(key, [i]);
        }

        for (let [key, values] of sortedMap) {
            let anagrams = new Array();
            for (let index of values) {
                anagrams.push(strs[index]);
            }
            res.push(anagrams);
        }

        return res;
    }
}
