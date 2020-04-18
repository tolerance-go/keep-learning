/**
 * 假设按照升序排序的数组在预先未知的某个点上进行了旋转。

( 例如，数组 [0,1,2,4,5,6,7] 可能变为 [4,5,6,7,0,1,2] )。

搜索一个给定的目标值，如果数组中存在这个目标值，则返回它的索引，否则返回 -1 。

你可以假设数组中不存在重复的元素。

你的算法时间复杂度必须是 O(log n) 级别。

示例 1:

输入: nums = [4,5,6,7,0,1,2], target = 0
输出: 4
示例 2:

输入: nums = [4,5,6,7,0,1,2], target = 3
输出: -1

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/search-in-rotated-sorted-array
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * 因为数组被旋转，所以数组并不是全长有序的，使用二分法判断左右区间的时候，需要先判断哪一侧是有序的
 *
 * 1. 如果 mid < right，说明右侧有序，否则左侧有序
 * 4561|234，345|612
 * 2. 因为数组不是连续的，需要同时判断 target 是否在左侧或者右侧内部
 * 3. 如果 target 在左侧，right = mid - 1
 * 4. 如果 target 在右侧，left = mid + 1
 * 5. 如果 target == mid 返回 left
 * 6. 否则返回 - 1
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  if (!nums || nums.length === 0) return -1;

  let l = 0,
    r = nums.length - 1;
  while (l <= r) {
    const mid = (l + r) >> 1;
    if (nums[mid] === target) return mid;

    if (nums[mid] < nums[r]) {
      if (target > nums[mid] && target <= nums[r]) {
        l = mid + 1;
      } else {
        r = mid - 1;
      }
    } else {
      if (target >= nums[l] && target < nums[mid]) {
        r = mid - 1;
      } else {
        l = mid + 1;
      }
    }
  }
  return -1;
};

module.exports = search;
