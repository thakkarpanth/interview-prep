class Solution {
    /**
     * @param {number[]} coins
     * @param {number} amount
     * @return {number}
     */
    cache = {};
    solve (coins, amount, idx) {
        if (this.cache[amount]) {
            return this.cache[amount];
        }

        if (amount < 0 || idx === coins.length) {
            return Infinity;
        }
        
        if (amount === 0) {
            return 0; 
        }
        // picking same coin
        const ans1 = 1 + this.solve(coins, amount - coins[idx], idx);

        // skipping coin 
        const ans2 = this.solve(coins, amount , idx + 1);
        
        return this.cache[amount] = Math.min(ans1, ans2);

    }
    coinChange(coins, amount) {
        const result = this.solve(coins, amount, 0);
        console.log(this.cache);
        return result === Infinity ? -1 : result;
    }
}
