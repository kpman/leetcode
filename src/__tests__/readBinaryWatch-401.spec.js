import readBinaryWatch from '../readBinaryWatch-401';

it(`Given a non-negative integer n which represents the number of LEDs that are currently on,
return all possible times the watch could represent.`, () => {
  const expected = ['1:00', '2:00', '4:00', '8:00', '0:01', '0:02', '0:04', '0:08', '0:16', '0:32'];
  expect(readBinaryWatch(1).sort()).toEqual(expected.sort());
  expect(readBinaryWatch(9)).toEqual([]);
});
