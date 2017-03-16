import { RECEIVE_SINGLE_PLANET } from '../actions/planets_actions';
import { merge } from 'lodash';

const PlanetShowReducer = (state = {}, action) => {
  Object.freeze(state);
  const newState = merge({}, state);

  switch(action.type) {
    case RECEIVE_SINGLE_PLANET:
      return action.planet;
    default:
      return state;
  }
};

export default PlanetShowReducer;
