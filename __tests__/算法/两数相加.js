const addTwoNumbers = require("../../src/算法/两数相加");
const { getNodeList } = require("../../src/utils");

test("addTwoNumbers", () => {
  expect(
    addTwoNumbers(getNodeList([2, 4, 3]), getNodeList([5, 6, 4]))
  ).toMatchSnapshot();
});
