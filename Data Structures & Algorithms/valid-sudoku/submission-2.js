class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        // brute forcing - O(n^2) (although its sudoku so O(9*9) = O(1))

        // row check
        for (let i = 0; i < board.length; i++) {
            let rowSet = new Set();
            for (let j = 0; j < board[i].length; j++) {
                if (board[i][j] === '.') continue;
                if (rowSet.has(board[i][j])) return false;
                rowSet.add(board[i][j]);
            }
        }

        // column check
        for (let j = 0; j < board[0].length; j++) {
            let colSet = new Set();
            for (let i = 0; i < board.length; i++) {
                if (board[i][j] === '.') continue;
                if (colSet.has(board[i][j])) return false;
                colSet.add(board[i][j]); 
            }
        }

        // box check
        for (let i = 0; i < board.length; i += 3) {
            for (let j = 0; j < board[i].length; j += 3) {
                let boxSet = new Set();
                // inner-box loop
                for (let iBox = i; iBox < i + 3; iBox++) {
                    for (let jBox = j; jBox < j + 3; jBox++) {
                        if (board[iBox][jBox] === '.') continue;
                        if (boxSet.has(board[iBox][jBox])) return false;
                        boxSet.add(board[iBox][jBox]);
                    }
                }
            }
        }

        return true;

        // time: O(1) (technically n^2)
        // space: O(3n^2) = O(n^2)
    }
}
