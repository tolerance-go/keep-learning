/**
给定一个字符串数组，将字母异位词组合在一起。字母异位词指字母相同，但排列不同的字符串。

示例:

输入: ["eat", "tea", "tan", "ate", "nat", "bat"]
输出:
[
  ["ate","eat","tea"],
  ["nat","tan"],
  ["bat"]
]
说明：

所有输入均为小写字母。
不考虑答案输出的顺序。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/group-anagrams
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * 将字符串按字母序列排序，使用 hashMap 进行唯一 key 的存放，key 就是 排序后字符串
 *
 * @param {string[]} strs
 * @return {string[][]}
 */
const groupAnagrams = (strs: string[]) => {
  const map = new Map();
  for (let i = 0; i < strs.length; i++) {
    const s = strs[i].split('').sort().join('');
    const arr = map.get(s);
    if (arr) {
      arr.push(strs[i]);
    } else {
      map.set(s, [strs[i]]);
    }
  }
  return Array.from(map.values());
};

export default groupAnagrams;
