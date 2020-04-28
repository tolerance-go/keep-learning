/**
给定一个链表，旋转链表，将链表每个节点向右移动 k 个位置，其中 k 是非负数。

示例 1:

输入: 1->2->3->4->5->NULL, k = 2
输出: 4->5->1->2->3->NULL
解释:
向右旋转 1 步: 5->1->2->3->4->NULL
向右旋转 2 步: 4->5->1->2->3->NULL
示例 2:

输入: 0->1->2->NULL, k = 4
输出: 2->0->1->NULL
解释:
向右旋转 1 步: 2->0->1->NULL
向右旋转 2 步: 1->2->0->NULL
向右旋转 3 步: 0->1->2->NULL
向右旋转 4 步: 2->0->1->NULL

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/rotate-list
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
 * 先形成一个环，然后把 head 当作 tail 移动 k % n 个位置，找到新的 tail，tail 的 next 就是新头
 *
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
const rotateRight = (head, k) => {
  if (head == null) return null;
  if (head.next == null) return head;

  let n;
  let temp = head;
  for (n = 1; temp.next != null; n++) {
    temp = temp.next;
  }

  temp.next = head;

  let newTail = head;

  for (let i = 0; i < n - (k % n) - 1; i++) {
    newTail = newTail.next;
  }

  head = newTail.next;
  newTail.next = null;

  return head;
};

export default rotateRight;
