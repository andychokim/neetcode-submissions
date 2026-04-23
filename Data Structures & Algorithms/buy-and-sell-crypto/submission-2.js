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

        while (buy < prices.length - 1 && sell < prices.length) {
            if (prices[buy] <= prices[sell]) {
                let profit = prices[sell] - prices[buy];
                res = Math.max(res, profit);
                if (sell === prices.length - 1) buy++;
                else sell++;
            }
            else {
                buy++;
                sell++;
            }
        }
        return res;
    }
}
