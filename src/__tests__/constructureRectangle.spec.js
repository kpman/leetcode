import constructRectangle from '../constructRectangle-492';

it('this is a constructRectangle', () => {
  expect(constructRectangle(1)).toEqual([1, 1]);
  expect(constructRectangle(4)).toEqual([2, 2]);
  expect(constructRectangle(8)).toEqual([4, 2]);
  expect(constructRectangle(232)).toEqual([29, 8]);
});
