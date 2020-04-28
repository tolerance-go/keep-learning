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
const zigzagLevelOrder = (root) => {
  if (root == null) {
    return [];
  }

  const results = [];

  // add the root element with a delimiter to kick off the BFS loop
  const nodeQueue = [];
  nodeQueue.push(root);
  nodeQueue.push(null);

  let levelList = [];
  let isOrderLeft = true;

  while (nodeQueue.length > 0) {
    const currNode = nodeQueue.shift();
    if (currNode != null) {
      if (isOrderLeft) levelList.push(currNode.val);
      else levelList.unshift(currNode.val);

      if (currNode.left != null) nodeQueue.push(currNode.left);
      if (currNode.right != null) nodeQueue.push(currNode.right);
    } else {
      // we finish the scan of one level
      results.push(levelList);
      levelList = [];
      // prepare for the next level
      if (nodeQueue.length > 0) nodeQueue.push(null);
      isOrderLeft = !isOrderLeft;
    }
  }

  return results;
};

export default zigzagLevelOrder;
