import test from 'ava';

import sample from '../sample-000';

test('this is a sample', t => {
  t.is(sample(1), 1);
})
