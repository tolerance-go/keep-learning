/**
给定一个可包含重复数字的序列，返回所有不重复的全排列。

示例:

输入: [1,1,2]
输出:
[
  [1,1,2],
  [1,2,1],
  [2,1,1]
]

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/permutations-ii
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * 使用深度优先遍历，标记组 used 表示当前数字下标 i 已经被使用，在一个最深路径中
 * 如果 used[i] 为 true，则跳过，同一层级中，如果 前后 2 个数字一样，需要剪枝，
 * 但是需要排除首次出现的深度探寻过程中的重复，使用 !used[i-1] 表示，因为 used[i-1] 已经
 * 回撤了，所以如果是 false 表示最高层的循环中出现，且重复
 *
 * nums[i] === nums[i-1] 注意前提是先排序
 *
 * @param {number[]} nums
 * @return {number[][]}
 */
const permuteUnique = (nums: number[]): number[][] => {
  const dps = (depth, paths, nums, used, res) => {
    if (depth === nums.length) {
      res.push([...paths]);
      return;
    }
    for (let i = 0; i < nums.length; i++) {
      if (used[i]) continue;

      if (i > 0 && nums[i] === nums[i - 1] && !used[i - 1]) {
        continue;
      }

      used[i] = true;
      paths.push(nums[i]);

      dps(depth + 1, paths, nums, used, res);

      paths.pop();
      used[i] = false;
    }
  };

  const used = Array(nums.length).fill(false);
  const res: number[][] = [];
  nums.sort();
  dps(0, [], nums, used, res);
  return res;
};

export default permuteUnique;
