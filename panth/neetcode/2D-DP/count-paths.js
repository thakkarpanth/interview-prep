class Solution {
    /**
     * @param {number} m
     * @param {number} n
     * @return {number}
     */
    cache = {};
    solve (m, n, idx1, idx2) {
        if (idx1 < 0 || idx1 >= m ) {
            return 0; 
        }
        if (idx2 < 0 || idx2 >= n ) {
            return 0; 
        }
        if (idx1 === m - 1 && idx2 === n-1) {
            return 1; 
        }
        if (this.cache[`${idx1}-${idx2}`]) {
            return this.cache[`${idx1}-${idx2}`];
        }
        return this.cache[`${idx1}-${idx2}`] = this.solve(m, n, idx1 + 1, idx2) + this.solve(m,n, idx1, idx2 + 1);
    }
    uniquePaths(m, n) {
        this.cache = {};
        return this.solve(m,n, 0, 0);
    }
}
