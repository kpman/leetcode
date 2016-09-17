import test from 'ava';

import findPeakElement from '../find-peak-element';

test('should find a peak element and return its index', t => {
  t.is(findPeakElement([1, 2, 3, 4, 5, 6]), 5);
});

test('should find a peak element and return one of its index', t => {
  const inputArr = [3, 4, 5, 6, 1, 2];
  const expected = [3, 5];
  t.true(expected.includes(findPeakElement(inputArr)));
});
