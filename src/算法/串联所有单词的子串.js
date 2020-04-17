/**
 * 给定一个字符串 s 和一些长度相同的单词 words。找出 s 中恰好可以由 words 中所有单词串联形成的子串的起始位置。

注意子串要与 words 中的单词完全匹配，中间不能有其他字符，但不需要考虑 words 中单词串联的顺序。

 

示例 1：

输入：
  s = "barfoothefoobarman",
  words = ["foo","bar"]
输出：[0,9]
解释：
从索引 0 和 9 开始的子串分别是 "barfoo" 和 "foobar" 。
输出的顺序不重要, [9,0] 也是有效答案。
示例 2：

输入：
  s = "wordgoodgoodgoodbestword",
  words = ["word","good","best","word"]
输出：[]

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/substring-with-concatenation-of-all-words
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * 关键点：
 * 1. 所有 word 的长度一样
 * 2. words 所有排列的可能都在集合中，所以只要对子串的单词计数即可
 *
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function (s, words) {
  let res = [];
  let wordsLen = words.length;
  if (wordsLen === 0) return res;
  const wordLen = words[0].length;

  const allWords = new Map();
  for (let word of words) {
    const value = allWords.get(word) || 0;
    allWords.set(word, value + 1);
  }

  for (let i = 0; i < s.length - words.length * wordLen + 1; i++) {
    const hasWords = new Map();

    let count = 0;

    while (count < words.length) {
      const word = s.substring(i + count * wordLen, i + (count + 1) * wordLen);
      if (allWords.has(word)) {
        const value = hasWords.get(word) || 0;
        hasWords.set(word, value + 1);
        if (hasWords.get(word) > allWords.get(word)) {
          break;
        }
      } else {
        break;
      }
      count++;
    }

    if (count === wordsLen) {
      res.push(i);
    }
  }

  return res;
};

module.exports = findSubstring;
