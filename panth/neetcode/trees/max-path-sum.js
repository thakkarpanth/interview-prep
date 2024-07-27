/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

 class Solution {
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    ans;
    solve (root) {
        if (!root) {
            return 0; 
        }
        const leftMax = Math.max(this.solve(root.left),0);
        const rightMax = Math.max(this.solve(root.right),0);
        this.ans = Math.max(this.ans, leftMax + rightMax + root.val);
        return root.val + Math.max(leftMax, rightMax);

    }
    maxPathSum(root) {
        this.ans = root.val; 
        this.solve(root);
        return this.ans;
    }
}
