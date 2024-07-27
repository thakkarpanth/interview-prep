/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */

 const solve = (root) => {
    if (!root) return null; 
    const left = root.left; 
    root.left = root.right;
    root.right = left;
    solve(root.left); 
    solve(root.right);
    return root;
}
var invertTree = function(root) {
    return solve(root); 
};