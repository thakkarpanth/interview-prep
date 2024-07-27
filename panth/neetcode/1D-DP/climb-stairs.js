class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    cache = {}; 
    solve (n) {
        if (n < 0) {
            return 0; 
        }
        if (n === 0) {
            return 1; 
        }
        if (this.cache[n]) {
            return this.cache[n];
        }
        return this.cache[n] = this.solve(n-1) + this.solve(n-2);
    }
    climbStairs(n) {
        return this.solve(n);
    }
}
