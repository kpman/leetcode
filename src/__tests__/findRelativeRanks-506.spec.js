import findRelativeRanks from '../findRelativeRanks-506';

it('should pass official test case', () => {
  expect(findRelativeRanks([5, 4, 3, 2, 1])).toEqual(['Gold Medal', 'Silver Medal', 'Bronze Medal', '4', '5']);
});

it('should pass failed test case', () => {
  expect(findRelativeRanks([10, 3, 8, 9, 4]))
    .toEqual(['Gold Medal', '5', 'Bronze Medal', 'Silver Medal', '4']);
});
