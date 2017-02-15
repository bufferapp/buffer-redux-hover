import {
  INCREMENT,
} from '../src/action.js';

describe('action', () => {
  it('INCREMENT action type exists', () => {
    expect(INCREMENT)
      .toBe('INCREMENT');
  });
});
