import { RECEIVE_PLANETS } from '../actions/planets_actions';
import { merge } from 'lodash';

const PlanetsIndexReducer = (state = {}, action) => {
  Object.freeze(state);
  const newState = merge({}, state);

  switch(action.type) {
    case RECEIVE_PLANETS:
      return action.planets;
    default:
      return state;
  }
};

export default PlanetsIndexReducer;
