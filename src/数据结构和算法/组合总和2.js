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
  const dfs = (candidates, residue, begin, path, res) => {
    if (residue === 0) {
      return res.push([...path]);
    }
    for (let i = begin; i < candidates.length; i++) {
      // 增序的前提下，如果剩余数小于0，后面的数字也不会作为其加数了
      if (residue - candidates[i] < 0) {
        break;
      }

      if (i > begin && candidates[i] === candidates[i - 1]) {
        continue;
      }

      path.push(candidates[i]);
      dfs(candidates, residue - candidates[i], i + 1, path, res);
      path.pop();
    }
  };

  let res = [];

  candidates.sort((a, b) => a - b);

  dfs(candidates, target, 0, [], res);

  return res;
};

module.exports = combinationSum2;
