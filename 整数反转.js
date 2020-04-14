/**
 * 给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。

示例 1:

输入: 123
输出: 321
 示例 2:

输入: -123
输出: -321
示例 3:

输入: 120
输出: 21
注意:

假设我们的环境只能存储得下 32 位的有符号整数，则其数值范围为 [−231,  231 − 1]。请根据这个假设，如果反转后整数溢出那么就返回 0。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/reverse-integer
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * 1. 不使用字符处理，对于负数的 floor 需要注意使用 ceil 代替
 * 2. 在计算前对溢出进行判断
 *
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  const sign = Math.sign(x);
  let res = 0;
  while (x !== 0) {
    const pop = x % 10;
    x /= 10;
    x = sign === 1 ? Math.floor(x) : Math.ceil(x);

    const min = Math.pow(-2, 31);
    const max = Math.pow(2, 31) - 1;

    if (!((min - pop) / 10 <= res && res <= (max - pop) / 10)) {
      return 0;
    }

    res = res * 10 + pop;
  }

  return res;
};

module.exports = reverse;
