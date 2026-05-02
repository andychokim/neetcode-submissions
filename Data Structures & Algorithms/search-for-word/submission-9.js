class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */
    exist(board, word) {
        // signs: 2D-grid searching, path finding, adjacent cells
        // pattern: DFS recursive iteration
            // find first letter, then start traveling adjacent cells for the next word
        
        // ** DON'T OVER COMPLICATE
            // DFS -> for checking "all" combinations "RECURSIVELY".
            // if its just simple "iteration", just use loops.
        let found = false;

        for (let y = 0; y < board.length; y++) {
            for (let x = 0; x < board[y].length; x++) {
                if (board[y][x] === word[0]) {
                    if (this.wordSearch(board, word, x, y, 0)) return true;
                }
            }
        }

        return found;
    }

    // return true if a word is found, false otherwise
    wordSearch(board, word, x, y, i) {
        // base cases
        if ((y < 0) || (y > board.length-1) ||
            (x < 0) || (x > board[y].length-1)) return false;
        if (board[y][x] !== word[i]) return false;

        // recursion 
        // at each node
        if (board[y][x] === word[i]) {
            let temp = board[y][x];
            board[y][x] = "visited";
            i++;
            if (i === word.length) return true;
        
            // c a a
            // a a a
            // b c d

            // pass down
            let right = this.wordSearch(board, word, x+1, y, i);
            let down = this.wordSearch(board, word, x, y+1, i);
            let left = this.wordSearch(board, word, x-1, y, i);
            let up = this.wordSearch(board, word, x, y-1, i);
            
            board[y][x] = temp; // backtracking - since failed to extend
            return (right || down || left || up);
        }
    }
}
