/**
给定一个包含红色、白色和蓝色，一共 n 个元素的数组，原地对它们进行排序，使得相同颜色的元素相邻，并按照红色、白色、蓝色顺序排列。

此题中，我们使用整数 0、 1 和 2 分别表示红色、白色和蓝色。

注意:
不能使用代码库中的排序函数来解决这道题。

示例:

输入: [2,0,2,1,1,0]
输出: [0,0,1,1,2,2]
进阶：

一个直观的解决方案是使用计数排序的两趟扫描算法。
首先，迭代计算出0、1 和 2 元素的个数，然后按照0、1、2的排序，重写当前数组。
你能想出一个仅使用常数空间的一趟扫描算法吗？

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/sort-colors
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * 荷兰国旗问题
 *
 * 设置 3 个指针，p0 始终指向 最后一个 0 的下一位，p2 始终指向 第一个 2 的前一位，
 * cur 始终指向当前指针，循环 nums，如果 cur 是 0 就和 p0 互换位置，如果 cur 是 2
 * 就和 p2 互换位置，注意 如果和 p2 互换位置，cur不向后移动，因为换回来的数字还没有检查
 *
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const sortColors = (nums) => {
  let p0 = 0,
    p2 = nums.length - 1,
    cur = 0;
  const swap = (nums, i, j) => {
    const temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
  };
  while (cur <= p2) {
    const el = nums[cur];
    if (el === 0) {
      swap(nums, cur, p0);
      cur++;
      p0++;
    } else if (el === 2) {
      swap(nums, cur, p2);
      p2--;
    } else {
      cur++;
    }
  }
  return nums;
};

export default sortColors;
