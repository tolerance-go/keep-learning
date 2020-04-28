const threeSum = require("../../src/数据结构和算法/双指针/三数之和");

test("threeSum([-1,0,1,2,-1,-4])", () => {
  expect(threeSum([-1, 0, 1, 2, -1, -4])).toStrictEqual([
    [-1, -1, 2],
    [-1, 0, 1],
  ]);
});
