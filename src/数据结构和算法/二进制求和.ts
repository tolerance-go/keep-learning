/**
给你两个二进制字符串，返回它们的和（用二进制表示）。

输入为 非空 字符串且只包含数字 1 和 0。

 

示例 1:

输入: a = "11", b = "1"
输出: "100"
示例 2:

输入: a = "1010", b = "1011"
输出: "10101"
 

提示：

每个字符串仅由字符 '0' 或 '1' 组成。
1 <= a.length, b.length <= 10^4
字符串如果不是 "0" ，就都不含前导零。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/add-binary
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * 从后向前，需要一个 carry 表示是否需要进位的标记量，2个数字有长有短
 * 循环中不够的位数补 0
 *
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
const addBinary = (a, b) => {
  let pa = a.length - 1;
  let pb = b.length - 1;
  const res = [];
  let carry = 0;
  while (pa >= 0 || pb >= 0) {
    const av = a[pa] == null ? 0 : parseInt(a[pa]);
    const bv = b[pb] == null ? 0 : parseInt(b[pb]);
    res.push((av + bv + carry) % 2);
    carry = Math.floor((av + bv + carry) / 2);
    pa--;
    pb--;
  }
  res.push(carry ? 1 : '');
  return res.reverse().join('');
};

export default addBinary;
