class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        // two-pointer, one from the beginning one from the end

        let str = s.split(' ').join('').toUpperCase();
        let left = 0;
        let right = str.length - 1;
        console.log(str, left, right)
        while (left < right) {
            while (!/[a-zA-Z0-9]/.test(str[left])) left++;
            while (!/[a-zA-Z0-9]/.test(str[right])) right--;
            console.log(left, right)
            if (str[left] != str[right]) return false;
            left++;
            right--;
        }
        return true;
    }
}
