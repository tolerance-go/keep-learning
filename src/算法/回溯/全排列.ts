/**
给定一个 没有重复 数字的序列，返回其所有可能的全排列。

示例:

输入: [1,2,3]
输出:
[
  [1,2,3],
  [1,3,2],
  [2,1,3],
  [2,3,1],
  [3,1,2],
  [3,2,1]
]

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/permutations
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * DFS 有回溯的特性
 *
 * @param {number[]} nums
 * @return {number[][]}
 */
const permute = (nums: number[]): number[] => {
  const res: number[] = [];

  const swap = (nums, i, j) => {
    const temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
  };
  const backtrack = (len, cur, nums, res) => {
    if (cur === len) {
      res.push([...nums]);
      return;
    }
    for (let i = cur; i < len; i++) {
      swap(nums, cur, i);
      backtrack(len, cur + 1, nums, res);
      swap(nums, cur, i);
    }
  };

  const nums2 = [];
  for (const num of nums) nums2.push(num);

  backtrack(nums.length, 0, nums2, res);
  return res;
};

export default permute;
