const { ListNode } = require('../../utils/utils');
/**
 * 给出两个 非空 的链表用来表示两个非负的整数。其中，它们各自的位数是按照 逆序 的方式存储的，并且它们的每个节点只能存储 一位 数字。

如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和。

您可以假设除了数字 0 之外，这两个数都不会以 0 开头。

示例：

输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
输出：7 -> 0 -> 8
原因：342 + 465 = 807

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/add-two-numbers
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

// Definition for singly-linked list.
// function ListNode(val) {
//   this.val = val;
//   this.next = null;
// }

/**
 * 两条链有长有短，如果不齐，则补0
 * 100
 * 001
 *
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (_l1, _l2) {
  const getNextNode = (l1, l2, _carry) => {
    const headNode = new ListNode();

    const val1 = l1 ? l1.val : 0;
    const val2 = l2 ? l2.val : 0;
    const sum = val1 + val2 + _carry;
    const carry = Math.floor(sum / 10);
    const current = sum % 10;

    headNode.val = current;

    if ((l1 && l1.next) || (l2 && l2.next) || carry) {
      headNode.next = getNextNode(l1 && l1.next, l2 && l2.next, carry);
    }

    return headNode;
  };

  return getNextNode(_l1, _l2, 0);
};

module.exports = addTwoNumbers;
