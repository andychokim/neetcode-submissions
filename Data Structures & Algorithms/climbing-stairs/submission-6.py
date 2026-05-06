class Solution:
    def climbStairs(self, n: int) -> int:
        # signs: find number of all distinct ways -> all unique combinations
        # pattern: bottom-up dfs
            # bottom up to easily state 0 -> 1 or 2 steps recursively
        # ** can use DP to reduce O(2^n) to O(n)

        return self.dfs(n, 0, 0, [None]*n)


    # helper dfs function
    # takes n, current steps (int), and combination count (int)
    def dfs(self, n:int, curr: int, count: int, cache) -> int:

        # base case
            # if curr > n, just stop
            # if curr == n, register cache[count] = count+1 then return count + 1
            # if cache[curr] is not empty, return cache[curr]
        # at each node
            # curr + 1
            # curr + 2
        # pass down
            # updated curr(s)
        
        # base
        # print(curr, cache[curr])
        if curr > n: return count;
        if curr == n: return count+1;
        if cache[curr]: return cache[curr];

        # recursion
        left = self.dfs(n, curr + 1, count, cache);
        right = self.dfs(n, curr + 2, count, cache);

        # final output
        cache[curr] = left + right;
        return cache[curr];
