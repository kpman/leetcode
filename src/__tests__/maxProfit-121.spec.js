import maxProfit from '../maxProfit-121';

it('be defined', () => {
  expect(maxProfit).toBeDefined();
});

it('pass offical test case', () => {
  expect(maxProfit([7, 1, 5, 3, 6, 4])).toBe(5);
  expect(maxProfit([7, 6, 4, 3, 1])).toBe(0);
});

it('pass custom test case', () => {
  expect(maxProfit([7, 2, 8, 1, 5])).toBe(6);
});
