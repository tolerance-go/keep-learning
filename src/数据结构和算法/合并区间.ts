/**
给出一个区间的集合，请合并所有重叠的区间。

示例 1:

输入: [[1,3],[2,6],[8,10],[15,18]]
输出: [[1,6],[8,10],[15,18]]
解释: 区间 [1,3] 和 [2,6] 重叠, 将它们合并为 [1,6].
示例 2:

输入: [[1,4],[4,5]]
输出: [[1,5]]
解释: 区间 [1,4] 和 [4,5] 可被视为重叠区间。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/merge-intervals
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * 如果按照左侧增序排序，那么不重叠的 2 个数组，第一个数组的右边一定小于第二个数组的左边
 *
 * @param {number[][]} intervals
 * @return {number[][]}
 */
const merge = (intervals) => {
  if (intervals.length === 0) return [];
  const arr = [...intervals];
  arr.sort((a, b) => a[0] - b[0]);

  const res = [arr[0]];
  for (let i = 1; i < arr.length; i++) {
    const end = res[res.length - 1];
    if (arr[i][0] <= end[1]) {
      // 需要合并
      end[1] = Math.max(arr[i][1], end[1]);
    } else {
      res.push(arr[i]);
    }
  }
  return res;
};

export default merge;
