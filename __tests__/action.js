import {
  HOVER,
  UNHOVER,
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
});
