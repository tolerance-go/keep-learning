/**
 * 合并 k 个排序链表，返回合并后的排序链表。请分析和描述算法的复杂度。

示例:

输入:
[
  1->4->5,
  1->3->4,
  2->6
]
输出: 1->1->2->3->4->4->5->6

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/merge-k-sorted-lists
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
  if (lists.length == 0) return null;

  const mergeTwoList = (l1, l2) => {
    if (l1 == null) {
      return l2;
    } else if (l2 == null) {
      return l1;
    } else if (l1.val < l2.val) {
      l1.next = mergeTwoList(l1.next, l2);
      return l1;
    } else {
      l2.next = mergeTwoList(l1, l2.next);
      return l2;
    }
  };

  const merge = (left, right) => {
    if (left === right) return lists[left];
    const mid = (left + right) >> 1;
    const l = merge(left, mid);
    const r = merge(mid + 1, right);
    return mergeTwoList(l, r);
  };

  return merge(0, lists.length - 1);
};

module.exports = mergeKLists;
