/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
const recoverTree = (root) => {
  const inorder = (root, nums) => {
    if (root == null) return;
    inorder(root.left, nums);
    nums.push(root.val);
    inorder(root.right, nums);
  };

  const findTwoSwapped = (nums) => {
    const n = nums.length;
    let x = -1,
      y = -1;
    for (let i = 0; i < n - 1; ++i) {
      if (nums[i + 1] < nums[i]) {
        y = nums[i + 1];
        // first swap occurence
        if (x == -1) x = nums[i];
        // second swap occurence
        else break;
      }
    }
    return [x, y];
  };

  const recover = (r, count, x, y) => {
    if (r != null) {
      if (r.val == x || r.val == y) {
        r.val = r.val == x ? y : x;
        if (--count == 0) return;
      }
      recover(r.left, count, x, y);
      recover(r.right, count, x, y);
    }
  };

  const nums = [];
  inorder(root, nums);
  const swapped = findTwoSwapped(nums);
  recover(root, 2, swapped[0], swapped[1]);
};

export default recoverTree;
