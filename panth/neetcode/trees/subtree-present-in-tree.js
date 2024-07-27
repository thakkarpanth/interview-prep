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
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSameTree(p, q) {
        if (!p && !q) return true; 
        if (!p && q) return false;
        if (!q && p) return false; 
        if (q.val !== p.val) return false; 
        return this.isSameTree(p.left, q.left) && this.isSameTree(p.right, q.right); 
    }

    isSubtree(root, subRoot) {
        if (this.isSameTree(root, subRoot)) {
            return true; 
        }
        if (root) {
            return this.isSubtree(root.left, subRoot) || this.isSubtree(root.right, subRoot); 
        }
        return false;

    }
}
 