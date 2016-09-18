import test from 'ava';

import findNthDigit from '../find-nth-digit';

test('Find the nth digit of the infinite integer sequence 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, ...', t => {
  t.is(findNthDigit(9), 9);
  t.is(findNthDigit(23), 6);
  t.is(findNthDigit(20), 1);
  t.is(findNthDigit(190), 1);
})
