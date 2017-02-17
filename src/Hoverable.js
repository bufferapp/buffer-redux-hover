import React, { PropTypes } from 'react';

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

Hoverable.propTypes = {
  children: PropTypes.node,
  hovered: PropTypes.bool,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default Hoverable;
