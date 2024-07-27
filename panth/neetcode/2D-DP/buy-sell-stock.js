class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    cache = {}; 
    solve (prices, idx, canBuy, buyPrice) {
        if (idx >= prices.length) return 0;
        const key = `${idx}-${canBuy}`; 
        if (canBuy) {
            const ans1 = this.solve(prices, idx + 1, false, prices[idx]);
            // did not buy
            const ans2 = this.solve(prices, idx +1, true, prices[idx]); 
            return this.cache[key] = Math.max(ans1, ans2); 
        }
        else {
            // did not sell 
            const ans1 = this.solve(prices, idx + 1, false, buyPrice); 
            // sold 
            const ans2 = prices[idx] - buyPrice + this.solve(prices, idx + 2, true, 0 );
            return this.cache[key] = Math.max(ans1, ans2); 
        }
    }
    maxProfit(prices) {
        return this.solve(prices, 0 , true, 0);
    }
}
