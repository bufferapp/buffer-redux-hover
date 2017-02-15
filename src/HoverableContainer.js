import { connect } from 'react-redux';
import {
  hover,
  unhover,
} from './action';
import Hoverable from './Hoverable';

const mapStateToProps = (state, ownProps) => ({
  hovered: ownProps.id && state.hover ? state.hover[ownProps.id] : false,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onMouseEnter: () => (ownProps.id ?
    dispatch(hover(ownProps.id)) : null),
  onMouseLeave: () => (ownProps.id ?
    dispatch(unhover(ownProps.id)) : null),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Hoverable);
