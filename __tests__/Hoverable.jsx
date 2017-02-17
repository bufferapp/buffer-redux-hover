import React from 'react';
import { mount } from 'enzyme';
import Hoverable from '../src/Hoverable';

/* eslint-disable react/prop-types */

const TestComponent = ({
  children,
  hover,
  onMouseEnter,
  onMouseLeave,
}) =>
  <div
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
    style={{ background: hover ? 'green' : 'red' }}
  >
    {children}
  </div>;

/* eslint-enable react/prop-types */

describe('Hoverable', () => {
  it('should render Hoverable', () => {
    const text = 'hi';
    const id = 'some id';
    const hoverable = mount(
      <Hoverable id={id}>
        <TestComponent>{text}</TestComponent>
      </Hoverable>,
    );
    expect(hoverable.find(TestComponent).text())
      .toBe(text);
  });

  it('should pass hovered to subcomponent', () => {
    const text = 'hi';
    const id = 'some id';
    const hoverable = mount(
      <Hoverable hovered id={id}>
        <TestComponent>{text}</TestComponent>
      </Hoverable>,
    );
    expect(hoverable.find(TestComponent).props().hovered)
      .toBe(true);
  });

  it('should pass onMouseEnter to subcomponent', () => {
    const text = 'hi';
    const id = 'some id';
    const mockOnMouseEnter = jest.fn();
    const hoverable = mount(
      <Hoverable onMouseEnter={mockOnMouseEnter} id={id}>
        <TestComponent>{text}</TestComponent>
      </Hoverable>,
    );
    hoverable.find(TestComponent).simulate('mouseEnter');
    expect(mockOnMouseEnter)
      .toBeCalled();
  });

  it('should pass onMouseLeave to subcomponent', () => {
    const text = 'hi';
    const id = 'some id';
    const mockOnMouseLeave = jest.fn();
    const hoverable = mount(
      <Hoverable onMouseLeave={mockOnMouseLeave} id={id}>
        <TestComponent>{text}</TestComponent>
      </Hoverable>,
    );
    hoverable.find(TestComponent).simulate('mouseLeave');
    expect(mockOnMouseLeave)
      .toBeCalled();
  });
});
