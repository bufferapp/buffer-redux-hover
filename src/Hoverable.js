import React from 'react';

const Hoverable = ({
  children,
  hovered,
  onMouseEnter,
  onMouseLeave,
}) =>
  React.cloneElement(children, {
    hovered,
    onMouseEnter,
    onMouseLeave,
  });

export default Hoverable;
