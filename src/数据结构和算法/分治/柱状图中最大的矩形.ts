/**
给定 n 个非负整数，用来表示柱状图中各个柱子的高度。每个柱子彼此相邻，且宽度为 1 。

求在该柱状图中，能够勾勒出来的矩形的最大面积。

 



以上是柱状图的示例，其中每个柱子的宽度为 1，给定的高度为 [2,1,5,6,2,3]。

 



图中阴影部分为所能勾勒出的最大矩形面积，其面积为 10 个单位。

 

示例:

输入: [2,1,5,6,2,3]
输出: 10

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/largest-rectangle-in-histogram
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * 分治
 *
 * 相邻矩形可以勾勒出来的最大矩形为 最小矩形高度 * 所有矩形的宽度总和
 *
 * @param {number[]} heights
 * @return {number}
 */
const largestRectangleArea = (heights) => {
  const calculateArea = (heights, start, end) => {
    if (start > end) {
      return 0;
    }
    let minIndex = start;
    for (let i = start + 1; i <= end; i++) {
      if (heights[minIndex] > heights[i]) {
        minIndex = i;
      }
    }

    return Math.max(
      heights[minIndex] * (end - start + 1),
      Math.max(
        calculateArea(heights, start, minIndex - 1),
        calculateArea(heights, minIndex + 1, end),
      ),
    );
  };

  return calculateArea(heights, 0, heights.length - 1);
};

export default largestRectangleArea;
