const romanToInt = require("../../src/数据结构和算法/罗马数字转整数");

test("romanToInt('III')", () => {
  expect(romanToInt("III")).toStrictEqual(3);
});
