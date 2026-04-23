class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        // still O(n^2) - but passing checks once, not three times separately
        let rowSet = Array.from({ length: board.length }, () => new Set());
        let colSet = Array.from({ length: board.length }, () => new Set());
        let boxSet = Array.from({ length: board.length }, () => new Set());

        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board[i].length; j++) {
                const val = board[i][j];

                if (val === '.') continue;
                
                let boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);

                if (rowSet[i].has(val) || 
                    colSet[j].has(val) || 
                    boxSet[boxIndex].has(val))
                    return false;
                
                rowSet[i].add(val);
                colSet[j].add(val);
                boxSet[boxIndex].add(val);
            }
        }

        return true;
    }

    // **to find the positions of n*n grids = Math.floor(i / n) * n + Math.floor(j / n)
    // Math.floor(i / n) -> shows 1~nth 'row' position
    // Math.floor(j / n) -> shows 1~nth 'column' position

    // Array.from() to turn any "Object" object into an array. - JS specific
}
