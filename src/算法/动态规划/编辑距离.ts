/**
给你两个单词 word1 和 word2，请你计算出将 word1 转换成 word2 所使用的最少操作数 。

你可以对一个单词进行如下三种操作：

插入一个字符
删除一个字符
替换一个字符
 

示例 1：

输入：word1 = "horse", word2 = "ros"
输出：3
解释：
horse -> rorse (将 'h' 替换为 'r')
rorse -> rose (删除 'r')
rose -> ros (删除 'e')
示例 2：

输入：word1 = "intention", word2 = "execution"
输出：5
解释：
intention -> inention (删除 't')
inention -> enention (将 'i' 替换为 'e')
enention -> exention (将 'n' 替换为 'x')
exention -> exection (将 'n' 替换为 'c')
exection -> execution (插入 'u')

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/edit-distance
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * 时刻记住dp状态的表示含义：dp[i][j]表示word1的前i个字符转换到word2的前j个字符有多少个操作

如果word1[i] === word2[j]，那么不需要额外的操作次数，直接等于前面的就好 dp[i][j] = dp[i-1][j-1] 如果word1[i] !== word2[j]，那么需要做操作了，虽然看上去有6种，因为我可以对 word1 操作也可以对 word2操作，但是在 word1 上删除和在 word2 上插入是等价的，替换也是一样哪边替换都可以，所以就变成了3种操作

dp[2][2]到dp[3][3]执行一次替换不管是谁替换谁，dp[2][3]到dp[3][3]执行一次新增或者删除，dp[3][2]到dp[3][3]执行一次新增或删除，他们最小的操作次数找出来就行
 * 
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
const minDistance = (word1, word2) => {
  // 状态定义
  const w1l = word1.length;
  const w2l = word2.length;
  const dp = Array.from(Array(w1l + 1), () => Array(w2l + 1));

  dp[0][0] = 0;

  for (let i = 1; i <= w1l; i++) {
    dp[i][0] = dp[i - 1][0] + 1;
  }
  for (let i = 1; i <= w2l; i++) {
    dp[0][i] = dp[0][i - 1] + 1;
  }

  for (let i = 1; i <= w1l; i++) {
    for (let j = 1; j <= w2l; j++) {
      if (word1[i - 1] === word2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        dp[i][j] =
          Math.min(Math.min(dp[i - 1][j], dp[i][j - 1]), dp[i - 1][j - 1]) + 1;
      }
    }
  }

  return dp[w1l][w2l];
};

export default minDistance;
