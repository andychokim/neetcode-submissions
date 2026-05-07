class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        // signs: ALL number of islands
        // pattern: dfs with marking 'visited', for loop

        let islandCount = 0;
        for (let y = 0; y < grid.length; y++) {
            for (let x = 0; x < grid[y].length; x++) {
                if (grid[y][x] === "1") {
                    this.borderChecker(grid, y, x);
                    islandCount++;
                }
            }
        }

        return islandCount;
    }

    // dfs traversing for marking the current "island" area
    // takes in grid, and y/x coordinates
    // as it travels the neighboring "1" lands, it marks them visited permanently
    // returns 1 
    borderChecker(grid, y, x) {
        console.log(grid)
        // bottom-up dfs - starts from one node and expands to its neighbors

        // base cases
        // if it is out of the grid's boundary, stop
        if ((y < 0 || y > grid.length-1) || (x < 0 || x > grid[y].length-1)) return;
        // if it is at "0", stop
        if (grid[y][x] === "0") return;

        // recursive cases
        // at each coord, mark "visited"
        grid[y][x] = "0";
        // pass down its neighboring coords
        this.borderChecker(grid, y, x-1);
        this.borderChecker(grid, y, x+1);
        this.borderChecker(grid, y-1, x);
        this.borderChecker(grid, y+1, x);

        // final return to resolve the initial recursive call
        return;
    }
}
