import test from 'ava';

import reverseVowels from '../reverseVowelsOfAString-345';

test('should reverse vowels in the input string', t => {
  t.is(reverseVowels('aeiou'), 'uoiea');
  t.is(reverseVowels('mouse'), 'meuso');
  t.is(reverseVowels('cocacola'), 'cacocalo');
});

test('should return its self when input.length equals one', t => {
  t.is(reverseVowels('a'), 'a');
  t.is(reverseVowels('b'), 'b');
});
