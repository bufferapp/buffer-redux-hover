import { connect } from 'react-redux';
import {
  hover,
  unhover,
} from './action';

const connectHoverable = (component) => {
  const mapStateToProps = (state, ownProps) => ({
    hovered: ownProps.hoverId && state.hover ? state.hover[ownProps.hoverId] : false,
  });

  const mapDispatchToProps = (dispatch, ownProps) => ({
    onMouseEnter: () => (ownProps.hoverId ? dispatch(hover(ownProps.hoverId)) : null),
    onMouseLeave: () => (ownProps.hoverId ? dispatch(unhover(ownProps.hoverId)) : null),
  });

  return connect(
    mapStateToProps,
    mapDispatchToProps,
  )(component);
};

export default connectHoverable;
