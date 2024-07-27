class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    cache = {};
    solve (nums, idx) {
        console.log(idx);
        if (idx >= nums.length) {
            return 0; 
        }
        if (this.cache[idx]) {
            return this.cache[idx]; 
        }
        const ans1 = nums[idx] + this.solve(nums, idx + 2);
        const ans2 = this.solve(nums, idx + 1); 
        console.log(ans1, ans2);
        return this.cache[idx] = Math.max(ans1, ans2);
    }
    rob(nums) {
        return this.solve(nums, 0);
    }
}
