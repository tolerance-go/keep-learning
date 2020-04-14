const climbStairs = require("../爬楼梯");

test("climbStairs(20)", () => {
  expect(climbStairs(20)).toStrictEqual(10946);
});

test("climbStairs(2)", () => {
  expect(climbStairs(2)).toStrictEqual(2);
});
