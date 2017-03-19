import { RECEIVE_SINGLE_HOST } from '../actions/hosts_actions';
import { merge } from 'lodash';

const HostShowReducer = (state = {}, action) => {
  Object.freeze(state);
  const newState = merge({}, state);

  switch(action.type) {
    case RECEIVE_SINGLE_HOST:
      return action.host;
    default:
      return state;
  }
};

export default HostShowReducer;
