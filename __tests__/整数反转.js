const reverse = require("../src/整数反转");

test("reverse(123)", () => {
  expect(reverse(123)).toStrictEqual(321);
});

test("reverse(-123)", () => {
  expect(reverse(-123)).toStrictEqual(-321);
});
