import { RECEIVE_SINGLE_HOST, RECEIVE_REVIEW, RECEIVE_REQUEST } from '../actions/hosts_actions';
import { merge } from 'lodash';

const HostShowReducer = (state = {}, action) => {
  Object.freeze(state);
  const newState = merge({}, state);

  switch(action.type) {
    case RECEIVE_SINGLE_HOST:
      return action.host;
    case RECEIVE_REVIEW:
      newState.reviews.push(action.review);
      return newState;
    case RECEIVE_REQUEST:
      debugger;
      newState.requestsReceived.push(action.request);
      return newState;
    default:
      return state;
  }
};

export default HostShowReducer;
