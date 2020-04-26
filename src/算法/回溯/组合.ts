/**
给定两个整数 n 和 k，返回 1 ... n 中所有可能的 k 个数的组合。

示例:

输入: n = 4, k = 2
输出:
[
  [2,4],
  [3,4],
  [2,3],
  [1,2],
  [1,3],
  [1,4],
]

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/combinations
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * DFS + 回溯
 *             root
 *         1     2       3
 *       2   3   3
 *       3
 *
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
const combine = (n, k) => {
  const res = [];
  const backtrack = (first, cur) => {
    if (cur.length === k) {
      res.push([...cur]);
      return;
    }
    for (let i = first; i < n + 1; i++) {
      cur.push(i);
      backtrack(i + 1, cur);
      cur.pop();
    }
  };

  backtrack(1, []);
  return res;
};

export default combine;
