import React from 'react';

const Hoverable = ({
  children,
  hovered,
  onMouseEnter,
}) =>
  React.cloneElement(children, {
    hovered,
    onMouseEnter,
  });

export default Hoverable;
