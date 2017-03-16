import * as APIUtil from '../util/planets_api_util';

export const RECEIVE_PLANETS = 'RECEIVE_PLANETS';
export const RECEIVE_SINGLE_PLANET = 'RECEIVE_SINGLE_PLANET';

export const receivePlanets = planets => ({
  type: RECEIVE_PLANETS,
  planets
});

export const receiveSinglePlanet = planet => ({
  type: RECEIVE_SINGLE_PLANET,
  planet
});

export const requestAllPlanets = () => dispatch => {
  return APIUtil.fetchAllPlanets()
    .then(planets => dispatch(receivePlanets(planets)));
};

export const requestSinglePlanet = planetId => dispatch => {
  return APIUtil.fetchSinglePlanet(planetId)
    .then(planet => dispatch(receiveSinglePlanet(planet)));
};
