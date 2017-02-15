import React from 'react';
import { shallow } from 'enzyme';
import Hoverable from '../src/Hoverable';

describe('Hoverable', () => {
  it('should render Hoverable', () => {
    const text = 'hi';
    const hoverable = shallow(
      <Hoverable><div>{text}</div></Hoverable>,
    );
    expect(hoverable.text())
      .toBe(text);
  });
});
