import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import connectHoverable from '../src/connectHoverable';
import {
  HOVER,
  UNHOVER,
} from '../src/action';

const storeFake = state => ({
  default: () => {},
  subscribe: () => {},
  dispatch: jest.fn(),
  getState: () => ({ ...state }),
});

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

const HoverableComponent = connectHoverable(TestComponent);

/* eslint-enable react/prop-types */

describe('HoverableContainer', () => {
  it('should render a container component', () => {
    const text = 'Hi!';
    const store = storeFake({});
    const wrapper = mount(
      <Provider store={store}>
        <HoverableComponent hoverId={'someid'}>{text}</HoverableComponent>
      </Provider>,
    );

    expect(wrapper.find(TestComponent).text())
      .toBe(text);
  });

  it('should render a hovered component', () => {
    const text = 'Hi!';
    const hoverId = 'someid';
    const store = storeFake({
      hover: {
        [hoverId]: true,
      },
    });
    const wrapper = mount(
      <Provider store={store}>
        <HoverableComponent hoverId={hoverId}>{text}</HoverableComponent>
      </Provider>,
    );

    expect(wrapper.find(TestComponent).props().hovered)
      .toBe(true);
  });

  it('should dispatch onMouseEnter event', () => {
    const text = 'Hi!';
    const hoverId = 'someid';
    const store = storeFake({});
    const wrapper = mount(
      <Provider store={store}>
        <HoverableComponent hoverId={hoverId}>{text}</HoverableComponent>
      </Provider>,
    );
    wrapper.find(HoverableComponent).simulate('mouseEnter');
    expect(store.dispatch)
      .toBeCalledWith({
        type: HOVER,
        hoverId,
      });
  });

  it('should dispatch onMouseLeave event', () => {
    const text = 'Hi!';
    const hoverId = 'someid';
    const store = storeFake({});
    const wrapper = mount(
      <Provider store={store}>
        <HoverableComponent hoverId={hoverId}>{text}</HoverableComponent>
      </Provider>,
    );
    wrapper.find(HoverableComponent).simulate('mouseLeave');
    expect(store.dispatch)
      .toBeCalledWith({
        type: UNHOVER,
        hoverId,
      });
  });

  it('should not dispatch onMouseEnter event without hoverId', () => {
    const text = 'Hi!';
    const store = storeFake({});
    const wrapper = mount(
      <Provider store={store}>
        <HoverableComponent>{text}</HoverableComponent>
      </Provider>,
    );
    wrapper.find(HoverableComponent).simulate('mouseEnter');
    expect(store.dispatch)
      .not.toBeCalled();
  });

  it('should not dispatch onMouseLeave event without hoverId', () => {
    const text = 'Hi!';
    const store = storeFake({});
    const wrapper = mount(
      <Provider store={store}>
        <HoverableComponent>{text}</HoverableComponent>
      </Provider>,
    );
    wrapper.find(HoverableComponent).simulate('mouseLeave');
    expect(store.dispatch)
      .not.toBeCalled();
  });
});
