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
    valid(node, left, right) {
        if (!node) {
            return true;
        }
        if (!(left < node.val && node.val < right)) {
            return false;
        }

        return (
            this.valid(node.left, left, node.val) &&
            this.valid(node.right, node.val, right)
        );
    }

    isValidBST(root) {
        return this.valid(root, -Infinity, Infinity);
    }
}
