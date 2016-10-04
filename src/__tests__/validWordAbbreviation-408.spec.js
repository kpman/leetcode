import validWordAbbreviation from '../validWordAbbreviation-408';

it('Given a non-empty string s and an abbreviation abbr, return whether the string matches with the given abbreviation.', () => {
  expect(validWordAbbreviation('internationalization', 'i12iz4n')).toBe(true);
});

it('Given a non-empty string s and an abbreviation abbr, return whether the string matches with the given abbreviation.', () => {
  expect(validWordAbbreviation('apple', 'a2e')).toBe(false);
});

it('Given a non-empty string s and an abbreviation abbr, return whether the string matches with the given abbreviation.', () => {
  expect(validWordAbbreviation('a', '01')).toBe(false);
});

it('Given a non-empty string s and an abbreviation abbr, return whether the string matches with the given abbreviation.', () => {
  expect(validWordAbbreviation('a', '2')).toBe(false);
});

it('Given a non-empty string s and an abbreviation abbr, return whether the string matches with the given abbreviation.', () => {
  expect(validWordAbbreviation('hi', '1')).toBe(false);
});

it('Given a non-empty string s and an abbreviation abbr, return whether the string matches with the given abbreviation.', () => {
  expect(validWordAbbreviation('leetcode', '2e5')).toBe(true);
});

it('Given a non-empty string s and an abbreviation abbr, return whether the string matches with the given abbreviation.', () => {
  expect(validWordAbbreviation('kpman', '5')).toBe(true);
  expect(validWordAbbreviation('kpmankpman', '5kp3')).toBe(true);
  expect(validWordAbbreviation('kpmankpman', '5kp2')).toBe(false);
  expect(validWordAbbreviation('kpmankpman', '5kp4')).toBe(false);
  expect(validWordAbbreviation('', '5kp4')).toBe(false);
  expect(validWordAbbreviation(' ', '5kp4')).toBe(false);
});
