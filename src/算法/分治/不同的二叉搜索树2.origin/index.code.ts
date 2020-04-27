import { TreeNode } from 'utils/utils';

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
const generateTrees = (n) => {
  const getAns = (start, end) => {
    const ans = [];
    //此时没有数字，将 null 加入结果中
    if (start > end) {
      ans.push(null);
      return ans;
    }
    //只有一个数字，当前数字作为一棵树加入结果中
    if (start == end) {
      const tree = new TreeNode(start);
      ans.push(tree);
      return ans;
    }
    //尝试每个数字作为根节点
    for (let i = start; i <= end; i++) {
      //得到所有可能的左子树
      const leftTrees = getAns(start, i - 1);
      //得到所有可能的右子树
      const rightTrees = getAns(i + 1, end);
      //左子树右子树两两组合
      for (const leftTree of leftTrees) {
        for (const rightTree of rightTrees) {
          const root = new TreeNode(i);
          root.left = leftTree;
          root.right = rightTree;
          //加入到最终结果中
          ans.push(root);
        }
      }
    }
    return ans;
  };

  const ans = [];
  if (n == 0) {
    return ans;
  }
  return getAns(1, n);
};

export default generateTrees;
