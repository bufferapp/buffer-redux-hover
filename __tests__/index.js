import {
  reducer,
  connectHoverable,
  hover,
  unhover,
} from '../src/index';

describe('index', () => {
  it('should export the reducer', () => {
    expect(reducer)
      .toBeDefined();
  });

  it('should export the HoverableContainer', () => {
    expect(connectHoverable)
      .toBeDefined();
  });
  it('should export hover action', () => {
    expect(hover)
      .toBeDefined();
  });
  it('should export unhover action', () => {
    expect(unhover)
      .toBeDefined();
  });
});
