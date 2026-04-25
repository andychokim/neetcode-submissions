class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        // create an array (stack)
        // for each char in s
            // if char is a closing bracket, check stack's most recent obj
                // if its a matching bracket, pop it
                // otherwise return false
            // if char is an opening bracket, 
                // stack.push(char)

        let stack = new Array();
        for (const char of s) {
            if (char === ')') {
                const pop = stack.pop();
                if (pop !== '(') return false;
            }
            else if (char === ']') {
                const pop = stack.pop();
                if (pop !== '[') return false;
            }
            else if (char === '}') {
                const pop = stack.pop();
                if (pop !== '{') return false;
            }
            else stack.push(char);
        }
        if (stack.length !== 0) return false;
        return true;
    }
}
