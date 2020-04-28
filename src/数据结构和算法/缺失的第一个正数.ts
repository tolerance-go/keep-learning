/**
给你一个未排序的整数数组，请你找出其中没有出现的最小的正整数。

示例 1:

输入: [1,2,0]
输出: 3
示例 2:

输入: [3,4,-1,1]
输出: 2
示例 3:

输入: [7,8,9,11,12]
输出: 1

提示：

你的算法的时间复杂度应为O(n)，并且只能使用常数级别的额外空间。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/first-missing-positive
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * 这道题的要求是复杂度为 O（N），只能做常量次循环
 *
 * 思路：
 * 将 nums 中所有小于和等于 0 和 大于 nums.length 的数字找出来，替换为 1，那么剩下数字范围
 * 就是 [1, L]，跳过极端情况，现在，循环数组，用其数值大小作为下标，L 则对应 0，将下标位置的数字做个标记，
 * 这里就是做取反操作，最后从小端遍历数组，第一个正数的下标就是最小正数，否则就是 L + 1
 *
 * @param {number[]} nums
 * @return {number}
 */
const firstMissingPositive = (nums: number[]): number => {
  const len = nums.length;
  let count = 0;
  // 查找是否有1
  for (let i = 0; i < len; i++) {
    if (nums[i] === 1) {
      count++;
      break;
    }
  }

  if (count === 0) {
    return 1;
  }

  // nums = [1]
  if (len === 1) {
    return 2;
  }

  for (let i = 0; i < len; i++) {
    if (nums[i] <= 0 || nums[i] > len) {
      nums[i] = 1;
    }
  }

  for (let i = 0; i < len; i++) {
    const n = Math.abs(nums[i]);
    if (n === len) {
      // len 借用 [0] 的位置
      nums[0] = -Math.abs(nums[0]);
    } else {
      // n 使用下标 n 表示，并用 负数 进行标记
      nums[n] = -Math.abs(nums[n]);
    }
  }

  // 此时从1开始循环，第一个出现的正数的下标就是最小正数
  for (let i = 1; i < len; i++) {
    if (nums[i] > 0) {
      return i;
    }
  }

  if (nums[0] > 0) {
    return len;
  }

  return len + 1;
};

export default firstMissingPositive;
