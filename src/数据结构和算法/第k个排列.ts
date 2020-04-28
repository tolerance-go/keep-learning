/**
给出集合 [1,2,3,…,n]，其所有元素共有 n! 种排列。

按大小顺序列出所有排列情况，并一一标记，当 n = 3 时, 所有排列如下：

"123"
"132"
"213"
"231"
"312"
"321"
给定 n 和 k，返回第 k 个排列。

说明：

给定 n 的范围是 [1, 9]。
给定 k 的范围是[1,  n!]。
示例 1:

输入: n = 3, k = 3
输出: "213"
示例 2:

输入: n = 4, k = 9
输出: "2314"

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/permutation-sequence
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * 全排列判断序号，通过序号的阶乘（权重）表达式来得出，我管他叫做：美丽的数学现象
 *
 * 1. 把 k 转换为从 0 开始的下标
 * 2. 阶乘数的最低位必然为 0
 * 3. 假设下标 k = 2，那么阶乘表示 2 = 1 * 2! + 0 * 1! + 0 * 0! = [1, 0, 0]
 * 4. 生成一个临时数组 temp = [1, n]
 * 5. 循环阶乘表达式数组，从低到高，将阶乘元素数值作为下标去 temp 里找，找到元素 push 到 res 中，找到一个删除一个，注意是
 * 在原数组上删除，让所有后面的下标进一位
 * 6. 将 res 数组拼接就是 k 序列对应的全排列数组
 *
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
const getPermutation = (n, k) => {
  const factorialNum = [];
  k = k - 1;

  factorialNum[n - 1] = 0;

  // 这里是 k 转换为阶乘权重表达式的代码
  for (let i = 1; i < n; i++) {
    factorialNum[n - i - 1] = k % (i + 1);
    k = Math.floor(k / (i + 1));
  }

  // 从1到n的全部数字
  const nums = [];
  for (let i = 1; i <= n; i++) {
    nums.push(i);
  }

  // 把阶乘数转换为具体的排列
  const sb = [];
  for (let i = 0; i < n; i++) {
    // 阶乘数的权重即为应当选取的数字的下标
    sb.push(nums[factorialNum[i]]);
    // 移除已经用过的数字
    nums.splice(factorialNum[i], 1);
  }

  return sb.join('');
};

export default getPermutation;
