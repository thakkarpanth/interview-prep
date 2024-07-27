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

    solve (root) {
        if (!root) return 0; 
        if (!root.left && !root.right) return 1; 

        const leftDepth = this.solve(root.left);
        const rightDepth = this.solve(root.right); 
        this.ans = Math.max(this.ans, leftDepth + rightDepth);
        return 1 + Math.max(leftDepth, rightDepth);  
    }

    diameterOfBinaryTree(root) {
        this.solve(root);
        return this.ans; 
      
    }

    
}
