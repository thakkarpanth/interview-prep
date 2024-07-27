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
     * @return {boolean}
     */
    ans = true;
    solve (root) {
        if (!root) return 0; 
        if (!root.left && !root.right) return 1; 
        const leftDepth = this.solve(root.left);
        const rightDepth = this.solve(root.right); 
        if (Math.abs(leftDepth - rightDepth) > 1) {
            this.ans = false;
        }
        return 1 + Math.max(leftDepth, rightDepth);

    }

    isBalanced(root) {
        this.solve(root);
        return this.ans;
    }
}
