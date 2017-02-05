import nextGreaterElement from '../nextGreaterElement-496';

it('can pass official test case', () => {
  expect(nextGreaterElement([4, 1, 2], [1, 3, 4, 2])).toEqual([-1, 3, -1]);
  expect(nextGreaterElement([2, 4], [1, 2, 3])).toEqual([3, -1]);
});
