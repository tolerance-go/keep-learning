const reverseKGroup = require("../src/递归/K个一组翻转链表");
const { getNodeList } = require("../src/utils");

test(`reverseKGroup([1,2,3,4,5], 2)`, () => {
  expect(reverseKGroup(getNodeList([1, 2, 3, 4, 5]), 2)).toStrictEqual(
    getNodeList([2, 1, 4, 3, 5])
  );
});
