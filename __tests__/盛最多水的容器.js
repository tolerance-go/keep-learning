const maxArea = require("../src/盛最多水的容器");

test(`maxArea([1,8,6,2,5,4,8,3,7])`, () => {
  expect(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])).toBe(49);
});
