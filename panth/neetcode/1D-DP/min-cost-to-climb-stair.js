class Solution {
    /**
     * @param {number[]} cost
     * @return {number}
     */
    cache = {}; 
    solve (cost, idx) {
        console.log(idx);
        if (idx >= cost.length) {
            return 0;
        }
        if (this.cache[idx]) {
            return this.cache[idx]; 
        }
        const jump1 = cost[idx] + this.solve(cost,idx + 1); 
        const jump2 = cost[idx] + this.solve(cost, idx + 2); 
        return Math.min(jump1, jump2);
    }
    minCostClimbingStairs(cost) {
        const ans1 = this.solve(cost, 0);
        const ans2 = this.solve(cost, 1); 
        return Math.min(ans1, ans2); 
    }
}
