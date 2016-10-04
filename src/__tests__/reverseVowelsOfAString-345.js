import reverseVowels from '../reverseVowelsOfAString-345';

it('should reverse vowels in the input string', () => {
  expect(reverseVowels('aeiou')).toBe('uoiea');
  expect(reverseVowels('mouse')).toBe('meuso');
  expect(reverseVowels('cocacola')).toBe('cacocalo');
});

it('should return its self when input.length equals one', () => {
  expect(reverseVowels('a')).toBe('a');
  expect(reverseVowels('b')).toBe('b');
});
