class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        // initial approach: recursion
        // const dfs = (i) => {

        //     // base case: return 1 or 0 based on the result
        //     if (i > n) return 0;
        //     if (i === n) return 1;

        //     // recursive case: take a step (or two)
        //     return (dfs(i + 1) + dfs(i + 2));
        // };

        // return dfs(0);

        // DP approach: utilizing cache
        let cache = new Array(n);
        cache.fill(-1);

        const dfs = (i) => {
            
            // base case: return 1 or 0 based on the result
            // if this dfs(x) call exists in the cache, return that
            if (i > n) return 0;
            if (i === n) return 1;
            if (cache[i] != -1) return cache[i];

            // recursive case: take a step (or two), and update the cache
            cache[i] = dfs(i + 1) + dfs(i + 2);
            console.log(cache);
            return (cache[i]);
        };

        return dfs(0);
    }
}
