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
    const hoverId = 'some hoverId';
    expect(reducer(undefined, {
      type: HOVER,
      hoverId,
    }))
      .toEqual({
        [hoverId]: true,
      });
  });
  it('should handle hover with existing hover states', () => {
    const hoverId = 'some hoverId';
    const otherId = 'other hoverId';
    const initialState = { [otherId]: true };
    expect(reducer(initialState, {
      type: HOVER,
      hoverId,
    }))
      .toEqual({
        ...initialState,
        [hoverId]: true,
      });
  });
  it('should handle UNHOVER', () => {
    const hoverId = 'some hoverId';
    const initialState = { [hoverId]: true };
    expect(reducer(initialState, {
      type: UNHOVER,
      hoverId,
    }))
      .toEqual({});
  });
  it('should handle missing UNHOVER hoverId', () => {
    const hoverId = 'some hoverId';
    const initialState = {};
    expect(reducer(initialState, {
      type: UNHOVER,
      hoverId,
    }))
      .toEqual({});
  });
});
