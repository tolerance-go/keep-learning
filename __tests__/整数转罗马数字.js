const intToRoman = require("../src/整数转罗马数字");

test("intToRoman(2000)", () => {
  expect(intToRoman(2000)).toStrictEqual("MM");
});
