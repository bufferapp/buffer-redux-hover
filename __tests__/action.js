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
      const hoverId = 'some id';
      expect(hover(hoverId))
        .toEqual({
          type: HOVER,
          hoverId,
        });
    });
  });
  describe('unhover', () => {
    it('should create expected action', () => {
      const hoverId = 'some id';
      expect(unhover(hoverId))
        .toEqual({
          type: UNHOVER,
          hoverId,
        });
    });
  });
});
