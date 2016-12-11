import validWordSquare from '../validWordSquare-422';

it('Given a sequence of words, check whether it forms a valid word square.', () => {
  const input = [
    'abcd',
    'bnrt',
    'crmy',
    'dtye',
  ];
  expect(validWordSquare(input)).toBe(true);
});

it('Given a sequence of words, check whether it forms a valid word square.', () => {
  const input = [
    'abcd',
    'bnrt',
    'crm',
    'dt',
  ];
  expect(validWordSquare(input)).toBe(true);
});

it('Given a sequence of words, check whether it forms a valid word square.', () => {
  const input = [
    'ball',
    'area',
    'read',
    'lady',
  ];
  expect(validWordSquare(input)).toBe(false);
});

it('Given a sequence of words, check whether it forms a valid word square.', () => {
  const input = [
    'ab',
  ];
  expect(validWordSquare(input)).toBe(false);
});

it('Given a sequence of words, check whether it forms a valid word square.', () => {
  const input = [
    '',
  ];
  expect(validWordSquare(input)).toBe(false);
});

it('Given a sequence of words, check whether it forms a valid word square.', () => {
  const input = ['abc', 'bde', 'cefg'];
  expect(validWordSquare(input)).toBe(false);
});
