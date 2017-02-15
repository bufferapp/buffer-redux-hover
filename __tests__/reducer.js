import reducer from '../src/reducer';
import {
  HOVER,
  UNHOVER,
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
  it('should handle UNHOVER', () => {
    const id = 'some id';
    const initialState = { [id]: true };
    expect(reducer(initialState, {
      type: UNHOVER,
      id,
    }))
      .toEqual({});
  });
  it('should handle missing UNHOVER id', () => {
    const id = 'some id';
    const initialState = {};
    expect(reducer(initialState, {
      type: UNHOVER,
      id,
    }))
      .toEqual({});
  });
});
