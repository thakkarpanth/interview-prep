class Solution {
    /**
     * @param {string} s
     * @param {string[]} wordDict
     * @return {boolean}
     */
    cache = {}; 
    wordDictMap = {};
    solve(s, idx) {
        if (idx === s.length) {
            return true; 
        }
        
        if (idx in this.cache) {
            return this.cache[idx];
        }
        let currString = ""; 
        let end = idx;
        while ( end < s.length ) {
            currString += s[end];
            if (this.wordDictMap[currString] && this.solve(s, end + 1)) {
                return this.cache[idx] = true; 
            } 
            end++; 
        }

        return this.cache[idx] = false; 
    }
    wordBreak(s, wordDict) {
        for (const word of wordDict) {
            this.wordDictMap[word] = true;
        }
        return this.solve(s, 0);
    }
}
