/**
给定两个以字符串形式表示的非负整数 num1 和 num2，返回 num1 和 num2 的乘积，它们的乘积也表示为字符串形式。

示例 1:

输入: num1 = "2", num2 = "3"
输出: "6"
示例 2:

输入: num1 = "123", num2 = "456"
输出: "56088"
说明：

num1 和 num2 的长度小于110。
num1 和 num2 只包含数字 0-9。
num1 和 num2 均不以零开头，除非是数字 0 本身。
不能使用任何标准库的大数类型（比如 BigInteger）或直接将输入转换为整数来处理。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/multiply-strings
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * 思路：
 *              [0,1,2]
 *                [0,1]
 *               1 2 3
 *                 4 5
 *               -----
 *                 1 5
 *               1 0
 *             0 5
 *               1 2
 *             0 8
 *           0 4
 *           ---------
 *           0 5 4 3 5
 *          [0,1,2,3,4]
 *
 * 从后向前循环，j + i + 1 = k
 *
 *
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
const multiply = (num1: string, num2: string): string => {
  if (num1 === '0' || num2 === '0') return '0';

  const res = Array(num1.length + num2.length).fill(0);

  for (let i = num1.length - 1; i >= 0; i--) {
    const n1 = Number(num1[i]);
    for (let j = num2.length - 1; j >= 0; j--) {
      const n2 = Number(num2[j]);
      const sum = res[i + j + 1] + n1 * n2;
      res[i + j + 1] = sum % 10;
      res[i + j] += Math.floor(sum / 10);
    }
  }

  let ans = '';

  for (let i = 0; i < res.length; i++) {
    if (i === 0 && res[i] === 0) continue;
    ans += res[i];
  }

  return ans;
};

export default multiply;
