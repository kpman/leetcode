import test from 'ava';

import validWordAbbreviation from '../validWordAbbreviation-408';

test('Given a non-empty string s and an abbreviation abbr, return whether the string matches with the given abbreviation.', t => {
  t.is(validWordAbbreviation('internationalization', 'i12iz4n'), true);
});

test('Given a non-empty string s and an abbreviation abbr, return whether the string matches with the given abbreviation.', t => {
  t.is(validWordAbbreviation('apple', 'a2e'), false);
});

test('Given a non-empty string s and an abbreviation abbr, return whether the string matches with the given abbreviation.', t => {
  t.is(validWordAbbreviation('a', '01'), false);
});

test('Given a non-empty string s and an abbreviation abbr, return whether the string matches with the given abbreviation.', t => {
  t.is(validWordAbbreviation('a', '2'), false);
});

test('Given a non-empty string s and an abbreviation abbr, return whether the string matches with the given abbreviation.', t => {
  t.is(validWordAbbreviation('hi', '1'), false);
});

test('Given a non-empty string s and an abbreviation abbr, return whether the string matches with the given abbreviation.', t => {
  t.is(validWordAbbreviation('leetcode', '2e5'), true);
});

test('Given a non-empty string s and an abbreviation abbr, return whether the string matches with the given abbreviation.', t => {
  t.is(validWordAbbreviation('kpman', '5'), true);
  t.is(validWordAbbreviation('kpmankpman', '5kp3'), true);
  t.is(validWordAbbreviation('kpmankpman', '5kp2'), false);
  t.is(validWordAbbreviation('kpmankpman', '5kp4'), false);
  t.is(validWordAbbreviation('', '5kp4'), false);
  t.is(validWordAbbreviation(' ', '5kp4'), false);
});
