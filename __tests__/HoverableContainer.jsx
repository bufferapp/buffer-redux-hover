import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import HoverableContainer from '../src/HoverableContainer';

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

/* eslint-enable react/prop-types */

describe('HoverableContainer', () => {
  it('should render a container component', () => {
    const text = 'Hi!';
    const store = storeFake({});
    const wrapper = mount(
      <Provider store={store}>
        <HoverableContainer id={'someid'}>
          <TestComponent>{text}</TestComponent>
        </HoverableContainer>
      </Provider>,
    );

    expect(wrapper.find(TestComponent).text())
      .toBe(text);
  });

  it('should render a hovered component', () => {
    const text = 'Hi!';
    const id = 'someid';
    const store = storeFake({
      hover: {
        [id]: true,
      },
    });
    const wrapper = mount(
      <Provider store={store}>
        <HoverableContainer id={id}>
          <TestComponent>{text}</TestComponent>
        </HoverableContainer>
      </Provider>,
    );

    expect(wrapper.find(TestComponent).props().hovered)
      .toBe(true);
  });

  it('should dispatch onMouseEnter event', () => {
    const text = 'Hi!';
    const id = 'someid';
    const store = storeFake({});
    const wrapper = mount(
      <Provider store={store}>
        <HoverableContainer id={id}>
          <TestComponent>{text}</TestComponent>
        </HoverableContainer>
      </Provider>,
    );
    wrapper.find(HoverableContainer).simulate('mouseEnter');
    expect(store.dispatch)
      .toBeCalled();
  });
});
