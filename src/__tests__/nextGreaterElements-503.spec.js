import nextGreaterElements from '../nextGreaterElements-503';

it('should pass official test case', () => {
  expect(nextGreaterElements([1, 2, 1])).toEqual([2, -1, 2]);
});

it('should pass fail test case', () => {
  expect(nextGreaterElements([5, 4, 3, 2, 1])).toEqual([-1, 5, 5, 5, 5]);
});
