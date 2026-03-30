class Solution {
    // naive approach
    // keep the original words as it is, and insert a special character in between each word

    // another approach
    // during encoding, we put integers that shows the length of each word (ex1: 4443) in the beginning of the combined string
        // at the end of the string, we put an integer showing the size of strs (ex1: 4)
    // during decoding, we first fetch the size of orginal strs from the end of the encoded string
        // then, fetch "size of strs" amount of characters from the beginning of the encoded string for the length of each word
    
    // problem with the approach above: if a word has longer than a single digit of size, size fetching causes error
    // fixed approach:
    // instead of creating a seperate sizeHolder in front of the string, put the sizes of each word in front of the according word
    // encoding ex: 4*neet4*code4*love3*you

    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encodedStrs = "";

        for (let word of strs) {
            encodedStrs += word.length.toString() + '*' + word;
        }

        return encodedStrs;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let decodedStr = [];
        let wordSizeHolder = "";

        for (let i=0; i<str.length; i++) {

            if (str[i] === '*') {
                let wordSize = parseInt(wordSizeHolder);
                let start = i + 1;
                let end = start + wordSize;
                
                decodedStr.push(str.substring(start, end));

                i = i + wordSize;
                wordSizeHolder = "";
            }
            else wordSizeHolder += str[i];
        }

        return decodedStr;
    }
}
