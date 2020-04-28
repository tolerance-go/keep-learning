/**
 * 给定一个按照升序排列的整数数组 nums，和一个目标值 target。找出给定目标值在数组中的开始位置和结束位置。

你的算法时间复杂度必须是 O(log n) 级别。

如果数组中不存在目标值，返回 [-1, -1]。

示例 1:

输入: nums = [5,7,7,8,8,10], target = 8
输出: [3,4]
示例 2:

输入: nums = [5,7,7,8,8,10], target = 6
输出: [-1,-1]

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/find-first-and-last-position-of-element-in-sorted-array
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * 使用2次二分法查找
 *
 * 1. 左侧二分法如果发现 mid === target，那么更早出现的 target 会在左边，所以保留左侧
 * 2. 右侧同上
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  if (!nums || nums.length === 0) return [-1, -1];
  const leftSearch = () => {
    let l = 0,
      r = nums.length;
    while (l < r) {
      const mid = (l + r) >> 1;
      if (nums[mid] === target) {
        r = mid;
      } else if (target > nums[mid]) {
        l = mid + 1;
      } else {
        r = mid;
      }
    }

    if (nums[l] === target) return l;
    return -1;
  };

  const rightSearch = () => {
    let l = 0,
      r = nums.length;
    while (l < r) {
      const mid = (l + r) >> 1;
      if (nums[mid] === target) {
        l = mid + 1;
      } else if (target > nums[mid]) {
        l = mid + 1;
      } else {
        r = mid;
      }
    }

    return l - 1;
  };

  const left = leftSearch();

  if (left === -1) return [-1, -1];
  const right = rightSearch();
  return [left, right];
};

module.exports = searchRange;
