import test from 'ava';

import removeKdigits from '../removeKdigits-402';

test.skip(`Given a non-negative integer num represented as a string,
remove k digits from the number so that the new number is the smallest possible.`, t => {
  t.pass();
  t.is(removeKdigits('1432219', 3), '1219');
  t.is(removeKdigits('10200', 1), '200');
  t.is(removeKdigits('10', 2), '0');
});
