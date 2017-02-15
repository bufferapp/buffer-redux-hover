import reducer from '../src/reducer';
import {
  HOVER,
} from '../src/action';

describe('reducer', () => {
  it('should return initial state', () => {
    expect(reducer(undefined, {}))
      .toEqual({});
  });
  it('should handle HOVER', () => {
    const id = 'some id';
    expect(reducer(undefined, {
      type: HOVER,
      id,
    }))
      .toEqual({
        [id]: true,
      });
  });
});
