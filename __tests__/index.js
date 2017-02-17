import {
  reducer,
  Hoverable,
} from '../src/index';

describe('index', () => {
  it('should export the reducer', () => {
    expect(reducer)
      .toBeDefined();
  });

  it('should export the HoverableContainer', () => {
    expect(Hoverable)
      .toBeDefined();
  });
});
