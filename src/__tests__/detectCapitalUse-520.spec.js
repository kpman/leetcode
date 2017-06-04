import detectCapitalUse from '../detectCapitalUse-520';

it('all uppercase word will return true', () => {
  expect(detectCapitalUse('NBA')).toBe(true);
  expect(detectCapitalUse('G')).toBe(true);
});

it('first uppercase character word will return true', () => {
  expect(detectCapitalUse('Google')).toBe(true);
});

it('all lowercase character word will return true', () => {
  expect(detectCapitalUse('apple')).toBe(true);
  expect(detectCapitalUse('a')).toBe(true);
});

it('other case will return false', () => {
  expect(detectCapitalUse('PandG')).toBe(false);
  expect(detectCapitalUse('jQuery')).toBe(false);
});
