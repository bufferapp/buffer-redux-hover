import {
  INCREMENT,
  DECREMENT,
} from '../src/action';

describe('action', () => {
  it('INCREMENT action type exists', () => {
    expect(INCREMENT)
      .toBe('INCREMENT');
  });
  it('DECREMENT action type exists', () => {
    expect(DECREMENT)
      .toBe('DECREMENT');
  });
});
