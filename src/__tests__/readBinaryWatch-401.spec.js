import test from 'ava';

import readBinaryWatch from '../readBinaryWatch-401';

test(`Given a non-negative integer n which represents the number of LEDs that are currently on,
return all possible times the watch could represent.`, t => {
  const expected = ["1:00", "2:00", "4:00", "8:00", "0:01", "0:02", "0:04", "0:08", "0:16", "0:32"];
  t.deepEqual(readBinaryWatch(1).sort(), expected.sort());
  t.deepEqual(readBinaryWatch(9), []);
});
