import originalDigits from '../originalDigits-423';

it('Given a non-empty string containing an out-of-order English representation of digits 0-9, output the digits in ascending order.', () => {
  expect(originalDigits('owoztneoer')).toBe('012');
});

it('Given a non-empty string containing an out-of-order English representation of digits 0-9, output the digits in ascending order.', () => {
  expect(originalDigits('fviefuro')).toBe('45');
});

it('Given a non-empty string containing an out-of-order English representation of digits 0-9, output the digits in ascending order.', () => {
  expect(originalDigits('zero')).toBe('0');
  expect(originalDigits('one')).toBe('1');
  expect(originalDigits('two')).toBe('2');
  expect(originalDigits('three')).toBe('3');
  expect(originalDigits('four')).toBe('4');
  expect(originalDigits('five')).toBe('5');
  expect(originalDigits('six')).toBe('6');
  expect(originalDigits('seven')).toBe('7');
  expect(originalDigits('eight')).toBe('8');
  expect(originalDigits('nine')).toBe('9');
});

it('Given a non-empty string containing an out-of-order English representation of digits 0-9, output the digits in ascending order.', () => {
  expect(originalDigits('zeroorze')).toBe('00');
});

it('Given a non-empty string containing an out-of-order English representation of digits 0-9, output the digits in ascending order.', () => {
  expect(originalDigits('twothree')).toBe('23');
});
