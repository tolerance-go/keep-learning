/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
const levelOrder = (root) => {
  const levels = [];

  const helper = (node, level) => {
    // start the current level
    if (levels.length == level) levels.push([]);

    // fulfil the current level
    levels[level].push(node.val);

    // process child nodes for the next level
    if (node.left != null) helper(node.left, level + 1);
    if (node.right != null) helper(node.right, level + 1);
  };

  if (root == null) return levels;
  helper(root, 0);
  return levels;
};

export default levelOrder;
