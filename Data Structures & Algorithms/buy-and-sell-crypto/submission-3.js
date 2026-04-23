class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        // no two pointers from left to right -> no determinator to shrink
        // try two pointers from i and i+1
        let buy = 0;
        let sell = 1;
        let res = 0;

        while (sell < prices.length) {
            if (prices[buy] <= prices[sell]) {
                let profit = prices[sell] - prices[buy];
                res = Math.max(res, profit);
                sell++;
            }
            else {
                buy = sell;
                sell = buy + 1;
            }
        }
        return res;

        // time: O(n), n: prices.length
        // space: O(1), just two pointer variables
    }
}
