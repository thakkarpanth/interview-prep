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
    ans = 0;
    solve(root, currMax) {
        if (!root) return; 
        console.log(root.val, currMax);
        if (root.val >= currMax) {
            this.ans++;
        }
        this.solve(root.left, Math.max(root.val, currMax));
        this.solve(root.right, Math.max(root.val, currMax));

    }
    goodNodes(root) {
        this.solve(root, root.val); 
        return this.ans;
    }
}
