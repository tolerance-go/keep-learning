const maxArea = require("../../src/算法/盛最多水的容器");

test(`maxArea([1,8,6,2,5,4,8,3,7])`, () => {
  expect(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])).toStrictEqual(49);
});
