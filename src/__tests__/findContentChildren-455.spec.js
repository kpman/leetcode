import findContentChildren from '../findContentChildren-455';

it('work', () => {
  expect(findContentChildren([1, 2], [1, 3, 4])).toBe(2);
  expect(findContentChildren([1, 2, 5], [1, 3, 4])).toBe(2);
  expect(findContentChildren([1, 2, 5, 2], [1, 3, 4])).toBe(3);
  expect(findContentChildren([1, 2, 5, 2], [9])).toBe(1);
  expect(findContentChildren([1], [1])).toBe(1);
});
