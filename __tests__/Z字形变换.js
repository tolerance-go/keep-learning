const convert = require("../src/Z字形变换");

test("convert", () => {
  expect(convert("PAYPALISHIRING", 3)).toStrictEqual("PAHNAPLSIIGYIR");
});
