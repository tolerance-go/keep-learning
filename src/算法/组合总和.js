/**
 * 给定一个无重复元素的数组 candidates 和一个目标数 target ，找出 candidates 中所有可以使数字和为 target 的组合。

candidates 中的数字可以无限制重复被选取。

说明：

所有数字（包括 target）都是正整数。
解集不能包含重复的组合。 
示例 1:

输入: candidates = [2,3,6,7], target = 7,
所求解集为:
[
  [7],
  [2,2,3]
]
示例 2:

输入: candidates = [2,3,5], target = 8,
所求解集为:
[
  [2,2,2,2],
  [2,3,3],
  [3,5]
]

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/combination-sum
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  /**
   * @param candidates 数组输入
   * @param len        输入数组的长度，冗余变量
   * @param residue    剩余数值
   * @param begin      本轮搜索的起点下标
   * @param path       从根结点到任意结点的路径
   * @param res        结果集变量
   */
  const dfs = (candidates, len, residue, begin, path, res) => {
    if (residue == 0) {
      // 由于 path 全局只使用一份，到叶子结点的时候需要做一个拷贝
      res.push([...path]);
      return;
    }

    for (let i = begin; i < len; i++) {
      // 在数组有序的前提下，剪枝
      if (residue - candidates[i] < 0) {
        break;
      }

      path.push(candidates[i]);
      dfs(candidates, len, residue - candidates[i], i, path, res);
      path.pop();
    }
  };

  let res = [];
  let len = candidates.length;

  // 排序是为了提前终止搜索
  candidates.sort((a, b) => a - b);

  dfs(candidates, len, target, 0, [], res);
  return res;
};

module.exports = combinationSum;
