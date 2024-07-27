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
     * @param {number} k
     * @return {number}
     */
    ans; counter = 0; 
    solve (root, k) {
        if (!root || this.ans) {
            return; 
        }
        this.solve(root.left, k);
        this.counter++;
        console.log(this.counter, k);
        if (this.counter === k) {
            this.ans = root.val;
            return; 
        }
        this.solve(root.right, k);
    }
    kthSmallest(root, k) {
        this.solve(root, k);
        return this.ans;
    }
}
