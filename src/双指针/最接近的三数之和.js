/**
 * 给定一个包括 n 个整数的数组 nums 和 一个目标值 target。找出 nums 中的三个整数，使得它们的和与 target 最接近。返回这三个数的和。假定每组输入只存在唯一答案。

例如，给定数组 nums = [-1，2，1，-4], 和 target = 1.

与 target 最接近的三个数的和为 2. (-1 + 2 + 1 = 2).

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/3sum-closest
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  if (nums == null) return null;
  if (nums.length < 3) return nums.reduce((a, b) => a + b);

  // 最先排序
  nums.sort((a, b) => a - b);

  let res = nums[0] + nums[1] + nums[2];

  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let l = i + 1,
      r = nums.length - 1;
    while (l < r) {
      let sum = nums[l] + nums[r] + nums[i];
      if (Math.abs(target - sum) < Math.abs(target - res)) {
        res = sum;
      }

      if (sum > target) {
        while (l < r && nums[r] == nums[r - 1]) r--;
        r--;
      } else if (sum < target) {
        while (l < r && nums[l] == nums[l + 1]) l++;
        l++;
      } else {
        return sum;
      }
    }
  }

  return res;
};

module.exports = threeSumClosest;
