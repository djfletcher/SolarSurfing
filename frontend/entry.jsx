import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import {
  RECEIVE_PLANETS, RECEIVE_SINGLE_PLANET, receivePlanets, receiveSinglePlanet, requestAllPlanets, requestSinglePlanet
} from './actions/planets_actions';

window.RECEIVE_PLANETS = RECEIVE_PLANETS;
window.RECEIVE_SINGLE_PLANET = RECEIVE_SINGLE_PLANET;
window.receivePlanets = receivePlanets;
window.receiveSinglePlanet = receiveSinglePlanet;
window.requestAllPlanets = requestAllPlanets;
window.requestSinglePlanet = requestSinglePlanet;

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  const preloadedState = { session: { currentUser: window.currentUser } };
  const store = window.currentUser ? configureStore(preloadedState) : configureStore();
  window.store = store;

  ReactDOM.render(<Root store={ store } />, root);
});
