import fullJustify from 'src/数据结构和算法/文本左右对齐';

test(`fullJustify(
  ['This', 'is', 'an', 'example', 'of', 'text', 'justification.'],
  16
)`, () => {
  expect(
    fullJustify(
      ['This', 'is', 'an', 'example', 'of', 'text', 'justification.'],
      16,
    ),
  ).toStrictEqual(['This    is    an', 'example  of text', 'justification.  ']);
});
