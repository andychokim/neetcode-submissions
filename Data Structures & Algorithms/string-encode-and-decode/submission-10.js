class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        // making patterns
        let res = "";
        for (let str of strs) {
            res += (str.length.toString() + '*' + str);
        }
        console.log(res);
        return res;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        // substring / jumping bw characters within a string
        let res = new Array();
        let strLength = new Array();
        for (let i = 0; i < str.length; i++) {
            if (str[i] != '*') strLength.push(str[i]);
            else {
                strLength = Number(strLength.join('')) // **Number() for str -> int
                res.push(str.slice(i+1, i+1+strLength)); // array.slice() is substr()
                i += strLength;
                strLength = new Array();
            }
        }
        return res;
    }
}
