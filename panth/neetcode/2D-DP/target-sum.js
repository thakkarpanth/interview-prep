class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    cache = {};
    solve (nums, target, idx, currSum) {
        const key = `${idx}-${currSum}`;
        if (idx === nums.length && currSum === target) {
            return this.cache[key] = 1; 
        }
        if (idx === nums.length && currSum !== target) {
            return this.cache[key] = 0; 
        }
        if (key in this.cache) {
            return this.cache[key];
        }
        return this.solve(nums, target, idx + 1, currSum + nums[idx]) 
        + this.solve(nums, target, idx + 1, currSum - nums[idx]); 
    }
    findTargetSumWays(nums, target) {
        return this.solve(nums, target, 0, 0);
    }
}
