import findRadius from '../findRadius-475';

describe('#findRadius', () => {
  it('should works', () => {
    expect(findRadius([1, 2, 3], [2])).toEqual(1);
    expect(findRadius([1, 2, 3, 4], [1, 4])).toEqual(1);
    expect(findRadius([1, 2, 3, 6], [1, 4])).toEqual(2);
  });
  it('should works with test case', () => {
    expect(findRadius(
      [282475249, 622650073, 984943658, 144108930, 470211272, 101027544, 457850878, 458777923],
      [823564440, 115438165, 784484492, 74243042, 114807987, 137522503, 441282327, 16531729, 823378840, 143542612], // eslint-disable-line max-len
    )).toEqual(161834419);
  });
});
