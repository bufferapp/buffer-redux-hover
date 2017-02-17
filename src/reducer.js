import {
  HOVER,
  UNHOVER,
} from './action';

const reducer = (state = {}, action) => {
  switch (action.type) {
    case HOVER:
      return { ...state, [action.hoverId]: true };
    case UNHOVER: {
      const newState = { ...state };
      delete newState[action.hoverId];
      return newState;
    }
    default:
      return state;
  }
};

export default reducer;
