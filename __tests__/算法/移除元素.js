const removeElement = require("../../src/算法/双指针/移除元素");

test(`removeElement([3,2,2,3], 3)`, () => {
  expect(removeElement([3, 2, 2, 3], 3)).toStrictEqual(2);
});
