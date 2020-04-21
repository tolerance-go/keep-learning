/**
给定一个非负整数数组，你最初位于数组的第一个位置。

数组中的每个元素代表你在该位置可以跳跃的最大长度。

你的目标是使用最少的跳跃次数到达数组的最后一个位置。

示例:

输入: [2,3,1,1,4]
输出: 2
解释: 跳到最后一个位置的最小跳跃数是 2。
     从下标为 0 跳到下标为 1 的位置，跳 1 步，然后跳 3 步到达数组的最后一个位置。
说明:

假设你总是可以到达数组的最后一个位置。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/jump-game-ii
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * 一次跳跃的距离是一个范围，第二次跳跃的范围和第一次跳跃的范围可能有重叠，
 *
 * 1. 将第一次跳跃最远距离，作为第二次跳跃的起跳位置，到达起跳位置时候，说明还可以
 * 继续跳跃，继续将第二次跳跃的最远距离，作为第三次跳跃的起跳位置（这里循环需要不断更新最远距离，在第一次起跳的范围内）
 * 2. 最后一个位置不需要跳
 *
 * @param {number[]} nums
 * @return {number}
 */
const jump = (nums: number[]): number => {
  let nextStart = 0,
    maxPos = 0,
    count = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    maxPos = Math.max(nums[i] + i, maxPos);
    if (i === nextStart) {
      nextStart = maxPos;
      count++;
    }
  }
  return count;
};

export default jump;
