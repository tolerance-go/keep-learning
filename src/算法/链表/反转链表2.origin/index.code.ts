import { ListNode } from 'utils/utils';

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * [1, 2, 3, 4, 5] m = 2, n = 4
 *
 * 第一次把 3 放到 1 后面 [1, 3, 2, 4, 5]
 * 第二次把 4 放到 1 后面 [1, 4, 3, 2, 5]
 *
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
const reverseBetween = (head, m, n) => {
  const dmy = new ListNode(-1);
  dmy.next = head;
  let delta = n - m;
  let pre = dmy,
    tail = head;
  //先定位出m节点和m之前的节点
  while (m > 1) {
    pre = tail;
    tail = tail.next;
    m--;
  }
  while (delta > 0) {
    const next = tail.next;
    tail.next = next.next; //tail一直不变，只要修改指针到next.next
    next.next = pre.next; //next.next指向pre的next，也就是最新的第m个位置
    pre.next = next; //更新next为最新的第m个位置
    delta--;
  }

  return dmy.next;
};

export default reverseBetween;
