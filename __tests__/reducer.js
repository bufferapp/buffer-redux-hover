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
  it('should handle hover with existing hover states', () => {
    const id = 'some id';
    const otherId = 'other id';
    const initialState = { [otherId]: true };
    expect(reducer(initialState, {
      type: HOVER,
      id,
    }))
      .toEqual({
        ...initialState,
        [id]: true,
      });
  });
});
