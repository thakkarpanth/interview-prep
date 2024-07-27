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
     * @return {number[][]}
     */
    levelOrder(root) {
        const res = [];
        const q = [];
        if (root) {
            q.push(root);
        }

        while (q.length > 0) {
            const val = [];

            for (let i = 0, len = q.length; i < len; i++) {
                const node = q.shift();
                val.push(node.val);
                if (node.left) {
                    q.push(node.left);
                }
                if (node.right) {
                    q.push(node.right);
                }
            }
            res.push(val);
        }
        return res;
    }
}
