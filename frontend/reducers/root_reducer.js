import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import PlanetsIndexReducer from './planets_index_reducer';
import PlanetShowReducer from './planet_show_reducer';
import HostShowReducer from './host_show_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  planetsIndex: PlanetsIndexReducer,
  planetShow: PlanetShowReducer,
  hostShow: HostShowReducer
});

export default RootReducer;
