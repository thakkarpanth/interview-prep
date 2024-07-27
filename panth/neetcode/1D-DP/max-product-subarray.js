class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxProduct(nums) {
        let currMax = 1;
        let currMin = 1;
        let ans = nums[0]; 
        for (const data of nums) {
            const temp = currMax * data;
            const temp2 = currMin * data; 
            currMax = Math.max(data, temp );
            currMax = Math.max(temp2, currMax); 

            currMin = Math.min(data, temp );
            currMin = Math.min(temp2, currMin); 

            ans = Math.max(ans, currMax);
        }
        return ans;
    }
}
