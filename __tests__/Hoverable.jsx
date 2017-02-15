import React from 'react';
import { mount } from 'enzyme';
import Hoverable from '../src/Hoverable';

/* eslint-disable react/prop-types */

const TestComponent = ({
  children,
  hover,
  onMouseEnter,
  onMouseLeave,
}) => {
  const style = {
    background: hover ? 'green' : 'red',
  };
  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={style}
    >
      {children}
    </div>
  );
};

/* eslint-enable react/prop-types */

describe('Hoverable', () => {
  it('should render Hoverable', () => {
    const text = 'hi';
    const hoverable = mount(
      <Hoverable>
        <TestComponent>{text}</TestComponent>
      </Hoverable>,
    );
    expect(hoverable.find(TestComponent).text())
      .toBe(text);
  });

  it('should pass hovered to subcomponent', () => {
    const text = 'hi';
    const hoverable = mount(
      <Hoverable hovered>
        <TestComponent>{text}</TestComponent>
      </Hoverable>,
    );
    expect(hoverable.find(TestComponent).props().hovered)
      .toBe(true);
  });
});
