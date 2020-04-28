/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
const inorderTraversal = (root) => {
  const helper = (root, res) => {
    if (root != null) {
      if (root.left != null) {
        helper(root.left, res);
      }
      res.push(root);
      if (root.right != null) {
        helper(root.right, res);
      }
    }
  };
  const res = [];
  helper(root, res);
  return res;
};

export default inorderTraversal;
