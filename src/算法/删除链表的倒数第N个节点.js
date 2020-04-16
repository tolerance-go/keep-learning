const { ListNode } = require("../utils");
/**
 * 给定一个链表，删除链表的倒数第 n 个节点，并且返回链表的头结点。

示例：

给定一个链表: 1->2->3->4->5, 和 n = 2.

当删除了倒数第二个节点后，链表变为 1->2->3->5.
说明：

给定的 n 保证是有效的。

进阶：

你能尝试使用一趟扫描实现吗？

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/remove-nth-node-from-end-of-list
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
 * 使用哑节点，方便特例情况的处理，比如删除 head 或者只有一个 node
 * 删除倒数第 n 个，等于删除正数第 L - n + 1
 * eg: 1 -> 2 -> 3 删除倒数第 1 个，等于删除正数第 3 - 1 + 1 = 3
 *
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
var removeNthFromEnd = function (head, n) {
  const removeNextNode = (node) => {
    node.next = node.next.next;
  };

  const dummy = new ListNode();

  dummy.next = head;
  head = dummy;

  let count = 0;
  let len = 0;

  let first = head.next;
  while (first) {
    len++;
    first = first.next;
  }

  let cur = head;
  while (count < len - n + 1 - 1) {
    count++;
    cur = cur.next;
  }

  if (cur) {
    removeNextNode(cur);
  }

  return head.next;
};

module.exports = removeNthFromEnd;
