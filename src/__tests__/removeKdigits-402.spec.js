import removeKdigits from '../removeKdigits-402';

xit(`Given a non-negative integer num represented as a string,
remove k digits from the number so that the new number is the smallest possible.`, () => {
  expect(removeKdigits('1432219', 3)).toBe('1219');
  expect(removeKdigits('10200', 1)).toBe('200');
  expect(removeKdigits('10', 2)).toBe('0');
});
