import React from 'react';

const Hoverable = ({ children, hovered }) =>
  React.cloneElement(children, { hovered });

export default Hoverable;
