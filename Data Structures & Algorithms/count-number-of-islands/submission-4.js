class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        // signs: 2D grid, connecting adjacent
        // pattern: DFS and backtracking

        return this.ocean(grid, 0, 0, 0);
    }

    // takes grid, beginning x and y, and island count (starting with 0) in
    // returns total number of islands
    ocean(grid, x, y, res) {
        // island is adjacent group of 1s
        // bottom-up

        // base
            // if it hit the last node, return res
        // at each node, I
            // if current node is 1
                // res += 1
                // start island territory searching
            // else
                // do nothing
        // pass down
            // move [y][x+1] (if not wall)
            // move [y+1][x] (if not wall)
        

        // base case - Error scenarios
        if (y >= grid.length || x >= grid[y].length) return res;
        

        // recursion
        // at each node...
        if (grid[y][x] === '1') {
            res += 1;
            this.island(grid, x, y); // run island territory search from this coord
            // console.log(grid);
        }
        // pass down...
        if (x < grid[y].length-1) res = this.ocean(grid, x+1, y, res);
        if (y < grid.length-1) res = this.ocean(grid, x, y+1, res);
        
        // pass back the "islands found from this coord" back to previous node
        return res;
    }

    island(grid, x, y) {
        // search for island territory only

        // base
            // hit 0, return;
        // at each node 
            // if current node is 1
                // flip it - 0
            // if not
                // do nothing
        // pass down
            // move [y][x+1] (if not wall)
            // move [y+1][x] (if not wall)
        

        // base cases:
        if (grid[y][x] === '0') return;

        // recursion
        // at each node...
        if (grid[y][x] === '1') grid[y][x] = '0';
        // pass down...
        if (x < grid[y].length-1) this.island(grid, x+1, y);
        if (x > 0) this.island(grid, x-1, y);
        if (y < grid.length-1) this.island(grid, x, y+1);
        if (y > 0) this.island(grid, x, y-1);

        // pass back 'empty return'
        return;
    }
}
