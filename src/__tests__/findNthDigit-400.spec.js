import findNthDigit from '../findNthDigit-400';

it('Find the nth digit of the infinite integer sequence 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, ...', () => {
  expect(findNthDigit(9)).toBe(9);
  expect(findNthDigit(23)).toBe(6);
  expect(findNthDigit(20)).toBe(1);
  expect(findNthDigit(190)).toBe(1);
})
