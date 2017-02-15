import {
  HOVER,
} from './action';

const reducer = (state = {}, action) => {
  switch (action.type) {
    case HOVER:
      return { ...state, [action.id]: true };
    default:
      return state;
  }
};

export default reducer;
