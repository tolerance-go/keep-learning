/**
 * 实现获取下一个排列的函数，算法需要将给定数字序列重新排列成字典序中下一个更大的排列。

如果不存在下一个更大的排列，则将数字重新排列成最小的排列（即升序排列）。

必须原地修改，只允许使用额外常数空间。

以下是一些例子，输入位于左侧列，其相应输出位于右侧列。
1,2,3 → 1,3,2
3,2,1 → 1,2,3
1,1,5 → 1,5,1

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/next-permutation
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * 题意可以理解为获取当前数字紧临的下一个更大的数字
 *
 * 1. 从右边开始，找到升序相邻的2个数字，左边设为小数 S
 * 2. 从右侧开始（找最低位），到 S 位置，找到比 S 小的数字，与 S 进行交换
 * 3. 此时 S 右边都是降序，将它 reverse 得到最小的数字
 *
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
  const reverse = (nums, start) => {
    let l = start,
      r = nums.length - 1;
    while (l < r) {
      swap(nums, l, r);
      l++;
      r--;
    }
  };

  const swap = (nums, i, j) => {
    const temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
  };

  let i = nums.length - 2;

  while (i >= 0 && nums[i] >= nums[i + 1]) {
    i--;
  }
  if (i >= 0) {
    let j = nums.length - 1;
    while (j >= 0 && nums[i] >= nums[j]) {
      j--;
    }
    swap(nums, i, j);
  }

  reverse(nums, i + 1);
};

module.exports = nextPermutation;
