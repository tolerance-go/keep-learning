/**
 * 给定一个包含 n 个整数的数组 nums 和一个目标值 target，判断 nums 中是否存在四个元素 a，b，c 和 d ，使得 a + b + c + d 的值与 target 相等？找出所有满足条件且不重复的四元组。

注意：

答案中不可以包含重复的四元组。

示例：

给定数组 nums = [1, 0, -1, 0, -2, 2]，和 target = 0。

满足要求的四元组集合为：
[
  [-1,  0, 0, 1],
  [-2, -1, 1, 2],
  [-2,  0, 0, 2]
]

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/4sum
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * 先排序，从小到大 O(NLogN)
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
  const res = [];
  if (nums == null) return res;
  if (nums.length < 4) return res;

  nums.sort((a, b) => a - b);

  const len = nums.length;

  for (let i = 0; i < nums.length - 3; i++) {
    const max = nums[i] + nums[len - 1] + nums[len - 2] + nums[len - 3];

    if (max < target) continue;

    const min = nums[i] + nums[i + 1] + nums[i + 2] + nums[i + 3];

    if (min > target) break;

    if (i > 0 && nums[i] === nums[i - 1]) continue;

    for (let j = i + 1; j < nums.length - 2; j++) {
      let l = j + 1,
        r = nums.length - 1;

      const max1 = nums[i] + nums[j] + nums[len - 1] + nums[len - 2];

      if (max1 < target) continue;

      const min1 = nums[i] + nums[j] + nums[j + 1] + nums[j + 2];

      if (min1 > target) break;

      if (j > i + 1 && nums[j] === nums[j - 1]) continue;

      while (l < r) {
        const sum = nums[i] + nums[j] + nums[l] + nums[r];
        if (sum === target) {
          res.push([nums[i], nums[j], nums[l], nums[r]]);
          while (l < r && nums[l] === nums[l + 1]) l++;
          while (l < r && nums[r] === nums[r - 1]) r--;
          l++;
          r--;
        } else if (sum > target) {
          while (l < r && nums[r] === nums[r - 1]) r--;
          r--;
        } else {
          while (l < r && nums[l] === nums[l + 1]) l++;
          l++;
        }
      }
    }
  }

  return res;
};

module.exports = fourSum;
