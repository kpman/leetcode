import findPeakElement from '../findPeakElement-162';

it('should find a peak element and return its index', () => {
  expect(findPeakElement([1, 2, 3, 4, 5, 6])).toBe(5);
});

it('should find a peak element and return one of its index', () => {
  const inputArr = [3, 4, 5, 6, 1, 2];
  const expected = [3, 5];
  expect(expected.includes(findPeakElement(inputArr))).toBe(true);
});
