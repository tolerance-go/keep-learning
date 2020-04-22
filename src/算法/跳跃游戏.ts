/**
给定一个非负整数数组，你最初位于数组的第一个位置。

数组中的每个元素代表你在该位置可以跳跃的最大长度。

判断你是否能够到达最后一个位置。

示例 1:

输入: [2,3,1,1,4]
输出: true
解释: 我们可以先跳 1 步，从位置 0 到达 位置 1, 然后再从位置 1 跳 3 步到达最后一个位置。
示例 2:

输入: [3,2,1,0,4]
输出: false
解释: 无论怎样，你总会到达索引为 3 的位置。但该位置的最大跳跃长度是 0 ， 所以你永远不可能到达最后一个位置。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/jump-game
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * 在跳跃过程，一次最远跳跃的距离下标为 nums[i] + i，继续向右侧遍历
 * 如果 i <= nums[i] + [i] 那么，都可以作为第二次跳跃的起点，也就是可以不断更新最远跳跃距离的下标
 * 如果最终也没有 >= n - 1，就得到一个失败的答案
 *
 * @param {number[]} nums
 * @return {boolean}
 */
const canJump = (nums) => {
  let rightMostIndex = 0;
  for (let i = 0; i < nums.length; i++) {
    if (i <= rightMostIndex) {
      rightMostIndex = Math.max(rightMostIndex, nums[i] + i);
      if (rightMostIndex >= nums.length - 1) {
        return true;
      }
    }
  }
  return false;
};

export default canJump;
