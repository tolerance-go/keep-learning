/**
给定一个单词数组和一个长度 maxWidth，重新排版单词，使其成为每行恰好有 maxWidth 个字符，且左右两端对齐的文本。

你应该使用“贪心算法”来放置给定的单词；也就是说，尽可能多地往每行中放置单词。必要时可用空格 ' ' 填充，使得每行恰好有 maxWidth 个字符。

要求尽可能均匀分配单词间的空格数量。如果某一行单词间的空格不能均匀分配，则左侧放置的空格数要多于右侧的空格数。

文本的最后一行应为左对齐，且单词之间不插入额外的空格。

说明:

单词是指由非空格字符组成的字符序列。
每个单词的长度大于 0，小于等于 maxWidth。
输入单词数组 words 至少包含一个单词。
示例:

输入:
words = ["This", "is", "an", "example", "of", "text", "justification."]
maxWidth = 16
输出:
[
   "This    is    an",
   "example  of text",
   "justification.  "
]
示例 2:

输入:
words = ["What","must","be","acknowledgment","shall","be"]
maxWidth = 16
输出:
[
  "What   must   be",
  "acknowledgment  ",
  "shall be        "
]
解释: 注意最后一行的格式应为 "shall be    " 而不是 "shall     be",
     因为最后一行应为左对齐，而不是左右两端对齐。       
     第二行同样为左对齐，这是因为这行只包含一个单词。
示例 3:

输入:
words = ["Science","is","what","we","understand","well","enough","to","explain",
         "to","a","computer.","Art","is","everything","else","we","do"]
maxWidth = 20
输出:
[
  "Science  is  what we",
  "understand      well",
  "enough to explain to",
  "a  computer.  Art is",
  "everything  else  we",
  "do                  "
]

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/text-justification
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
const fullJustify = (words, maxWidth) => {
  const appendLine = (words, maxWidth, res, start) => {
    if (start >= words.length) {
      return res;
    }

    // 存储本行的单词
    const rowArr = [words[start]];
    // 记录当前的单词以及单词间至少一个空格的总长度。
    let count = words[start].length,
      i = start + 1;

    while (i < words.length && count + words[i].length < maxWidth) {
      // 记录单词及单个空格的长度
      count += words[i].length + 1;
      rowArr.push(words[i]);
      i++;
    }

    let rowStr = '';

    if (i < words.length) {
      // 总共的空格数
      const space = maxWidth - count + rowArr.length - 1;
      // 每一个单词间的空格数
      const eachSpace = Math.floor(space / (rowArr.length - 1));
      // 多余的空格数
      let extSpace = space % (rowArr.length - 1);
      for (let j = 0; j < rowArr.length; j++) {
        rowStr += rowArr[j];
        if (j !== rowArr.length - 1) {
          let space = eachSpace;
          // 多余的空格依次填充于前面的单词之间
          if (extSpace > 0) {
            space += 1;
            extSpace--;
          }
          while (space-- > 0) {
            rowStr += ' ';
          }
        }
      }
    } else {
      // 若为最后一行，单词间仅有一个空格。
      for (let j = 0; j < rowArr.length; j++) {
        if (j < rowArr.length - 1) {
          rowStr += rowArr[j] + ' ';
        } else {
          rowStr += rowArr[j];
        }
      }
    }

    // 填充空格于单行字符串末尾，处理最后一行以及单行只有一个单词的情况。
    while (rowStr.length < maxWidth) {
      rowStr += ' ';
    }

    res.push(rowStr);
    return appendLine(words, maxWidth, res, i);
  };

  return appendLine(words, maxWidth, [], 0);
};

export default fullJustify;
