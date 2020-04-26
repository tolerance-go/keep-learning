/**
给定一个字符串 s1，我们可以把它递归地分割成两个非空子字符串，从而将其表示为二叉树。

下图是字符串 s1 = "great" 的一种可能的表示形式。

    great
   /    \
  gr    eat
 / \    /  \
g   r  e   at
           / \
          a   t
在扰乱这个字符串的过程中，我们可以挑选任何一个非叶节点，然后交换它的两个子节点。

例如，如果我们挑选非叶节点 "gr" ，交换它的两个子节点，将会产生扰乱字符串 "rgeat" 。

    rgeat
   /    \
  rg    eat
 / \    /  \
r   g  e   at
           / \
          a   t
我们将 "rgeat” 称作 "great" 的一个扰乱字符串。

同样地，如果我们继续交换节点 "eat" 和 "at" 的子节点，将会产生另一个新的扰乱字符串 "rgtae" 。

    rgtae
   /    \
  rg    tae
 / \    /  \
r   g  ta  e
       / \
      t   a
我们将 "rgtae” 称作 "great" 的一个扰乱字符串。

给出两个长度相等的字符串 s1 和 s2，判断 s2 是否是 s1 的扰乱字符串。

示例 1:

输入: s1 = "great", s2 = "rgeat"
输出: true
示例 2:

输入: s1 = "abcde", s2 = "caebd"
输出: false

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/scramble-string
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
const isScramble = (s1, s2) => {
  const chs1 = s1.split('');
  const chs2 = s2.split('');
  const n = s1.length;
  const m = s2.length;
  if (n != m) {
    return false;
  }
  const dp = Array.from(Array(n), () =>
    Array.from(Array(n), () => Array(n + 1).fill(false)),
  );

  // 初始化单个字符的情况
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      dp[i][j][1] = chs1[i] == chs2[j];
    }
  }

  // 枚举区间长度 2～n
  for (let len = 2; len <= n; len++) {
    // 枚举 S 中的起点位置
    for (let i = 0; i <= n - len; i++) {
      // 枚举 T 中的起点位置
      for (let j = 0; j <= n - len; j++) {
        // 枚举划分位置
        for (let k = 1; k <= len - 1; k++) {
          // 第一种情况：S1 -> T1, S2 -> T2
          if (dp[i][j][k] && dp[i + k][j + k][len - k]) {
            dp[i][j][len] = true;
            break;
          }
          // 第二种情况：S1 -> T2, S2 -> T1
          // S1 起点 i，T2 起点 j + 前面那段长度 len-k ，S2 起点 i + 前面长度k
          if (dp[i][j + len - k][k] && dp[i + k][j][len - k]) {
            dp[i][j][len] = true;
            break;
          }
        }
      }
    }
  }
  return dp[0][0][n];
};

export default isScramble;
