class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let minimumBuyingPrice = prices[0];
        let profit = 0;
        for(let i = 1; i < prices.length; i++) {
            if (minimumBuyingPrice > prices[i]) {
                minimumBuyingPrice = prices[i];
            } else {
                let newProfit = prices[i] - minimumBuyingPrice;
                profit = Math.max(profit, newProfit);
            }
        }
        return profit;
    }
}
