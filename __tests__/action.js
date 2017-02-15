import {
  HOVER,
  UNHOVER,
  hover,
  unhover,
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
  describe('unhover', () => {
    it('should create expected action', () => {
      const id = 'some id';
      expect(unhover(id))
        .toEqual({
          type: UNHOVER,
          id,
        });
    });
  });
});
