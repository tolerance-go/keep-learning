const { ListNode, addTwoNumbers } = require("../两数相加");

test("addTwoNumbers", () => {
  const l1_1 = new ListNode(2);
  const l1_2 = new ListNode(4);
  const l1_3 = new ListNode(3);
  l1_1.next = l1_2;
  l1_2.next = l1_3;

  const l2_1 = new ListNode(5);
  const l2_2 = new ListNode(6);
  const l2_3 = new ListNode(4);
  l2_1.next = l2_2;
  l2_2.next = l2_3;

  expect(addTwoNumbers(l1_1, l2_1)).toMatchSnapshot();
});
