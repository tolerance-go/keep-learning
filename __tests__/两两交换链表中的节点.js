const swapPairs = require("../src/递归/两两交换链表中的节点");
const { getNodeList } = require("../src/utils");

test("swapPairs", () => {
  expect(
    swapPairs(getNodeList([1, 2, 3, 4]), getNodeList([2, 1, 4, 3]))
  ).toMatchSnapshot();
});
