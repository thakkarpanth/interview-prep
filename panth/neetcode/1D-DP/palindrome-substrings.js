class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
     ans = 0;
     expandAroundCenter(s, left, right) {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            left--;
            right++;
            this.ans++;
        }
        return right - left - 1;
    }

    countSubstrings(s) {
        if (s.length <= 1) return s.length;
        for (let i = 0; i < s.length; i++) {
            let len1 = this.expandAroundCenter(s, i, i);       // Odd length palindromes
            let len2 = this.expandAroundCenter(s, i, i + 1);   // Even length palindromes

        }
        return this.ans;
    }
}
