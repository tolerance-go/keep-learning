/**
 * 给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有满足条件且不重复的三元组。

注意：答案中不可以包含重复的三元组。

 

示例：

给定数组 nums = [-1, 0, 1, 2, -1, -4]，

满足要求的三元组集合为：
[
  [-1, 0, 1],
  [-1, -1, 2]
]

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/3sum
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * 增序排序，双指针
 * 注意跳过重复
 *
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  const res = [];

  if (!nums || nums.length < 3) return res;

  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 2; i++) {
    let l = i + 1,
      r = nums.length - 1;

    if (i > 0 && nums[i] === nums[i - 1]) continue;

    const min = nums[i] + nums[i + 1] + nums[i + 2];

    if (min > 0) break;

    const max = nums[i] + nums[nums.length - 1] + nums[nums.length - 2];

    if (max < 0) continue;

    while (l < r) {
      const sum = nums[l] + nums[r] + nums[i];

      if (sum === 0) {
        res.push([nums[i], nums[l], nums[r]]);
        while (l < r && nums[l] === nums[l + 1]) l++;
        while (l < r && nums[r] === nums[r - 1]) r--;
        l++;
        r--;
      } else if (sum < 0) {
        while (l < r && nums[l] === nums[l + 1]) l++;
        l++;
      } else {
        while (l < r && nums[r] === nums[r - 1]) r--;
        r--;
      }
    }
  }

  return res;
};

module.exports = threeSum;
