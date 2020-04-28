/**
给定一个链表和一个特定值 x，对链表进行分隔，使得所有小于 x 的节点都在大于或等于 x 的节点之前。

你应当保留两个分区中每个节点的初始相对位置。

示例:

输入: head = 1->4->3->2->5->2, x = 3
输出: 1->2->2->4->3->5

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/partition-list
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

import { ListNode } from 'utils/utils';

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * 题目的意思就是，在特定 x 前面的节点值都比 x 后面的节点值小
 *
 * 定义 2 个链表分别存放比 x 小的，和比 x 大的，最后组合 2 个链表和 x
 *
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
const partition = (head, x) => {
  const dummyBeforeHead = new ListNode(-1);
  let before = dummyBeforeHead;
  const dummyAfterHead = new ListNode(-1);
  let after = dummyAfterHead;

  while (head != null) {
    if (head.val < x) {
      before.next = head;
      before = before.next;
    } else {
      after.next = head;
      after = after.next;
    }
    head = head.next;
  }

  after.next = null;

  before.next = dummyAfterHead.next;
  return dummyBeforeHead.next;
};

export default partition;
