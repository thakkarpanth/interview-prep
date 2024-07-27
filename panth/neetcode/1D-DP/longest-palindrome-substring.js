class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    expandAroundCenter(s, left, right) {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            left--;
            right++;
        }
        return right - left - 1;
    }
    longestPalindrome(s) {
        if (s.length <= 1) return s;

        let start = 0, end = 0;

        for (let i = 0; i < s.length; i++) {
            let len1 = this.expandAroundCenter(s, i, i);       // Odd length palindromes
            let len2 = this.expandAroundCenter(s, i, i + 1);   // Even length palindromes
            let len = Math.max(len1, len2);

            if (len > end - start) {
                start = i - Math.floor((len - 1) / 2);
                end = i + Math.floor(len / 2);
            }
        }

        return s.slice(start, end + 1);
    }
}
