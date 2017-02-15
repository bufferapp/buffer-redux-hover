import { connect } from 'react-redux';
import {
  hover,
  unhover,
} from './action';
import Hoverable from './Hoverable';

const mapStateToProps = (state, ownProps) => ({
  hovered: ownProps.hoverId ? state.hover[ownProps.hoverId] : false,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onMouseEnter: () => (ownProps.hoverId ?
    dispatch(hover(ownProps.hoverId)) : null),
  onMouseLeave: () => (ownProps.hoverId ?
    dispatch(unhover(ownProps.hoverId)) : null),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Hoverable);
