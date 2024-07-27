class Solution {
    /**
     * @param {string} text1
     * @param {string} text2
     * @return {number}
     */
    cache = {}; 
    solve (text1, text2, m, n) {
        if (m >= text1.length || n >= text2.length) {
            return 0; 
        }
        const key = `${m}-${n}`;
        if (key in this.cache) {
            return this.cache[key];
        }
        if (text1[m] == text2[n]) {
            return this.cache[key] = 1 + this.solve(text1, text2, m + 1, n + 1)
        }
        else {
            const ans1 = this.solve(text1, text2, m + 1, n);
            const ans2 = this.solve(text1, text2, m, n + 1);
            return this.cache[key] = Math.max(ans1, ans2); 
        }
    }

    longestCommonSubsequence(text1, text2) {
        this.cache = {};
        return this.solve(text1, text2, 0, 0);
    }
}
