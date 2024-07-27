class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    cache = {}; 
    solve (nums, idx, prev) {
        if (idx >= nums.length) {
            return 0;
        }
        let ans1 = this.solve(nums, idx + 1 , prev); 
        let ans2 = -Infinity; 
        if (nums[idx] > prev) {
            ans2 = 1 + this.solve(nums, idx + 1, nums[idx]); 
        }
        return this.cache[idx] = Math.max(ans1, ans2); 
    }
    lengthOfLIS(nums) {
        return this.solve(nums, 0, -Infinity);
    }
}
