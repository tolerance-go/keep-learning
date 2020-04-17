/**
 * 给定一个数组 candidates 和一个目标数 target ，找出 candidates 中所有可以使数字和为 target 的组合。

candidates 中的每个数字在每个组合中只能使用一次。

说明：

所有数字（包括目标数）都是正整数。
解集不能包含重复的组合。 
示例 1:

输入: candidates = [10,1,2,7,6,1,5], target = 8,
所求解集为:
[
  [1, 7],
  [1, 2, 5],
  [2, 6],
  [1, 1, 6]
]
示例 2:

输入: candidates = [2,5,2,1,2], target = 5,
所求解集为:
[
  [1,2,2],
  [5]
]

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/combination-sum-ii
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
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

      if (i > begin && candidates[i] === candidates[i - 1]) {
        continue;
      }

      path.push(candidates[i]);
      dfs(candidates, len, residue - candidates[i], i + 1, path, res);
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

module.exports = combinationSum2;
