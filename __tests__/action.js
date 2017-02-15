import {
  HOVER,
  UNHOVER,
  hover,
} from '../src/action';

describe('action', () => {
  it('HOVER action type exists', () => {
    expect(HOVER)
      .toBe('HOVER');
  });
  it('UNHOVER action type exists', () => {
    expect(UNHOVER)
      .toBe('UNHOVER');
  });
  describe('hover', () => {
    it('should create expected action', () => {
      const id = 'some id';
      expect(hover(id))
        .toEqual({
          type: HOVER,
          id,
        });
    });
  });
});
