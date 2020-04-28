/**
 * 
给你 n 个非负整数 a1，a2，...，an，每个数代表坐标中的一个点 (i, ai) 。在坐标内画 n 条垂直线，垂直线 i 的两个端点分别为 (i, ai) 和 (i, 0)。找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。

说明：你不能倾斜容器，且 n 的值至少为 2。

 



图中垂直线代表输入数组 [1,8,6,2,5,4,8,3,7]。在此情况下，容器能够容纳水（表示为蓝色部分）的最大值为 49。

 

示例：

输入：[1,8,6,2,5,4,8,3,7]
输出：49
 */

/**
 * 双指针法
 * 开始和结束各安插一个指针，较小的高需要将指针内移，这是因为如果移动较大的高，矩形的面积
 * 依然受限于另一条矮高，所以我们试图寻找内部更高的高，去抵消宽度缩小带来面积缩小
 *
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let max = 0,
    l = 0,
    r = height.length - 1;
  while (l < r) {
    max = Math.max(max, (r - l) * Math.min(height[l], height[r]));
    if (height[l] < height[r]) {
      l++;
    } else {
      r--;
    }
  }
  return max;
};

module.exports = maxArea;
