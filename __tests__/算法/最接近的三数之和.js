const threeSumClosest = require("../../src/算法/双指针/最接近的三数之和");

test(`threeSumClosest([-1,2,1,-4], 1)`, () => {
  expect(threeSumClosest([-1, 2, 1, -4], 1)).toStrictEqual(2);
});
