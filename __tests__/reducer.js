import reducer from '../src/reducer';

describe('reducer', () => {
  it('should return initial state', () => {
    expect(reducer(undefined, {}))
      .toEqual({});
  });
});
