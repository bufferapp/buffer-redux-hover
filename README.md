# buffer-redux-hover

[![Build Status](https://travis-ci.org/bufferapp/buffer-redux-hover.svg?branch=master)](https://travis-ci.org/bufferapp/buffer-redux-hover)

Keep react component hover state in redux

## Usage

Combine the reducer under the `hover` state tree:

```js
import { combineReducers } from 'redux';
import { reducer as hover } from '@bufferapp/redux-hover';

const app = combineReducers({
  hover, // important to have this under the hover state tree
});

export default app;
```

Create a component that has a `hovered`, `onMouseEnter` and `onMouseLeave` prop:

```js
import React from 'react';
import { connectHoverable } from '@bufferapp/redux-hover';

const MyHoverableComponent = ({
  hovered, // managed by redux-hover
  onMouseEnter,
  onMouseLeave,
}) => {
  const style = {
    background: hovered ? 'red' : 'blue',
  };
  return (
    <div
      style={style}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      Hover This
    </div>
  );
};

MyHoverableComponent.propTypes = {
  hoverId: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  hovered: PropTypes.bool,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
};

export default connectHoverable(MyHoverableComponent);
```

Wrap `MyComponent` with the `Hoverable` component. Make sure you set and `id`:

```js
import React from 'react';
import MyHoverableComponent from './MyHoverableComponent';

const App = () =>
  <div>
    <MyHoverableComponent hoverId={'myComponent'}/>
    <MyHoverableComponent hoverId={'myOtherComponent'}/>
  </div>;

export default App;
```

## Notes

### hovered prop

The hovered prop is set to `true` on `MyComponent` when the mouse is hovering over it. Otherwise it's set to false.

### Choosing hoverId's

As long as id's are different, they'll be independently hoverable. The above example sets the strings manually, but you could also use a `uuid()` too.

This also means that ids with the same value will all get the hover state applied when any of them are hovered.

### MyComponent is cloned with `React.clone`

This keeps the number of elements on the page minimal but adds a little overhead to clone the hoverable component.
