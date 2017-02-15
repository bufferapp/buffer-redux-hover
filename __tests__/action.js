import {
  INCREMENT,
} from '../src/action';

describe('action', () => {
  it('INCREMENT action type exists', () => {
    expect(INCREMENT)
      .toBe('INCREMENT');
  });
});
