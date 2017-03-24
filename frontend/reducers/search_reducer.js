import { RECEIVE_SEARCH } from '../actions/search_actions';
import { merge } from 'lodash';

const SearchReducer = (state = {}, action) => {
  Object.freeze(state);
  const newState = merge({}, state);

  switch(action.type) {
    case RECEIVE_SEARCH:
      return action.searchParams;
    default:
      return state;
  }
};

export default SearchReducer;
