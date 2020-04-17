const climbStairs = require("../../src/算法/动态规划/爬楼梯");

test("climbStairs(20)", () => {
  expect(climbStairs(20)).toStrictEqual(10946);
});

test("climbStairs(2)", () => {
  expect(climbStairs(2)).toStrictEqual(2);
});
