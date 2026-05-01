class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        // signs: searching within ordered array(2D)
        // pattern: binary search
            // can use num being bigger or smaller than target for further navigation
        
        let mL = 0;
        let mR = matrix.length - 1;
        let m = 0;
        // just wait until m(mid) sets itself at the correct row
        while (mL <= mR) {
            m = Math.floor((mR + mL) / 2);
            if (target > matrix[m][matrix[m].length-1]) mL = m + 1;
            else if (target < matrix[m][0]) mR = m - 1;
            else break;
        }
        console.log('m:', m);
        let nL = 0;
        let nR = matrix[m].length - 1;
        while (nL <= nR) {
            let n = Math.floor((nR + nL) / 2);
            if (target > matrix[m][n]) nL = n + 1;
            else if (target < matrix[m][n]) nR = n - 1;
            else if (target === matrix[m][n]) return true;
        }
        return false;
    }
}
