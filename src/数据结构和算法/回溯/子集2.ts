/**
给定一个可能包含重复元素的整数数组 nums，返回该数组所有可能的子集（幂集）。

说明：解集不能包含重复的子集。

示例:

输入: [1,2,2]
输出:
[
  [2],
  [1],
  [1,2,2],
  [2,2],
  [1,2],
  []
]

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/subsets-ii
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * 回溯，DFS
 *
 * 首先排序，保证重复的剪枝有效
 * 如果路径上存在，同层循环出现重复都需要剪枝
 *
 * @param {number[]} nums
 * @return {number[][]}
 */
const subsetsWithDup = (nums) => {
  const len = nums.length;
  nums = [...nums];
  nums.sort();
  const res = [];
  const hash = {};
  const backtrack = (path, start) => {
    res.push([...path]);
    for (let i = start; i < len; i++) {
      if (hash[i]) continue;

      // hash[i - 1] === false 因为 hash 会回溯，这里把条件限制在同一层循环
      if (i > 0 && hash[i - 1] === false && nums[i - 1] === nums[i]) continue;

      hash[i] = true;
      path.push(nums[i]);
      backtrack(path, i + 1);
      path.pop();
      hash[i] = false;
    }
  };

  backtrack([], 0);
  return res;
};

export default subsetsWithDup;
