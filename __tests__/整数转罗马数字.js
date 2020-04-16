const intToRoman = require("../src/算法/整数转罗马数字");

test("intToRoman(2000)", () => {
  expect(intToRoman(2000)).toStrictEqual("MM");
});
