class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    cache = {}; 
    solve (s , idx) { 
        if (this.cache[idx]) {
            return this.cache[idx];
        }
        if (idx == s.length) {
            return 1; // This is a valid decoding
        }

        // no trailing zeros
        if (s[idx] === '0') {
            return 0; 
        }

        let ans = this.solve(s, idx + 1); 
        if (idx + 1 < s.length && parseInt(s.substring(idx, idx + 2)) <= 26) {
            ans += this.solve(s, idx + 2); 
        }
        return this.cache[idx] = ans;
    }
    numDecodings(s) {
        return this.solve(s , 0 ); 
    }
}
