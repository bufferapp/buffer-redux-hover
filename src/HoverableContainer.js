import { connect } from 'react-redux';
import {
  hover,
  unhover,
} from './action';
import Hoverable from './Hoverable';

const mapStateToProps = (state, ownProps) => ({
  hovered: state.hover ? state.hover[ownProps.id] : false,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onMouseEnter: () => dispatch(hover(ownProps.id)),
  onMouseLeave: () => dispatch(unhover(ownProps.id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Hoverable);
