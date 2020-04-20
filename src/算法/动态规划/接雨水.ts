/**
给定 n 个非负整数表示每个宽度为 1 的柱子的高度图，计算按此排列的柱子，下雨之后能接多少雨水。



上面是由数组 [0,1,0,2,1,0,1,3,2,1,2,1] 表示的高度图，在这种情况下，可以接 6 个单位的雨水（蓝色部分表示雨水）。 感谢 Marcos 贡献此图。

示例:

输入: [0,1,0,2,1,0,1,3,2,1,2,1]
输出: 6

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/trapping-rain-water
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * 思路：
 * 1. 在某个位置 i 处，它能存的水，取决于它左右两边的最大值中较小的一个，S = 小边 - arr[i]
 * 2. 定义备忘录 dpLeft[i] 表示，i 处，左边最大的值，包括 i 在内，同理可以得 dpRight[j]
 *
 * @param {number[]} height
 * @return {number}
 */
const trap = (height: number[] | null): number => {
  if (height == null) return 0;

  // 状态定义
  const dpLeft = [],
    dpRight = [];

  const len = height.length;

  // 状态初始化
  dpLeft[0] = height[0];
  dpRight[len - 1] = height[len - 1];

  // 状态转移
  for (let i = 1; i < len; i++) {
    dpLeft[i] = Math.max(height[i], dpLeft[i - 1]);
  }
  for (let j = len - 2; j >= 0; j--) {
    dpRight[j] = Math.max(height[j], dpRight[j + 1]);
  }

  let ans = 0;
  for (let i = 1; i < len - 1; i++) {
    ans += Math.min(dpLeft[i], dpRight[i]) - height[i];
  }
  return ans;
};

export default trap;
