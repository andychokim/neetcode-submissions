class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        // save each str's length information as its header
        // etc. 5*Hello5*World
        const encoded = new Array();
        for (let str of strs) {
            let length = str.length;
            encoded.push(`${length}*` + str);
        }
        return encoded.join('');
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    // 2 index markers like window algo.
    // 1 for beginning of each "decoded" word
    // 1 for looping over the string 'str'
    decode(str) {
        let delimiter = 0;
        let res = new Array();

        for (let i = 0; i < str.length; i++) {
            if (str[i] === '*') {
                let length = Number(str.slice(delimiter, i));
                let start = i + 1;
                delimiter = start + length;
                res.push(str.slice(start, delimiter));

                i = delimiter - 1; // move to the next delimiter point (to avoid catching '*' within a word)
            }
        }
        return(res);
    }

    // window pointer problem: set global pointers to 
    // track multiple indices at the same time within a loop
}
