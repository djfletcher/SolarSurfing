/* globals jest */

import { hashHistory } from 'react-router';
import * as APIUtil from '../util/planets_api_util';

import {
  RECEIVE_PLANETS,
  RECEIVE_SINGLE_PLANET,
  requestAllPlanets,
  requestSinglePlanet,
  receivePlanets,
  receiveSinglePlanet
} from '../actions/planets_actions';

import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';

const middlewares = [ thunk ];
const mockStore = configureMockStore(middlewares);

describe('planet actions', () => {
  describe('planet constants', () => {
    it('should contain a RECEIVE_PLANETS constant', () => {
      expect(RECEIVE_PLANETS).toEqual('RECEIVE_PLANETS');
    });

    it('should contain a RECEIVE_SINGLE_PLANET constant', () => {
      expect(RECEIVE_SINGLE_PLANET).toEqual('RECEIVE_SINGLE_PLANET');
    });
  });

  describe('thunks', () => {
    let store;

    beforeEach(() => {
      store = mockStore({ planets: {} });
    });

    describe('requestAllPlanets', () => {
      it('should export a requestAllPlanets function', () => {
        expect(typeof requestAllPlanets).toEqual('function');
      });

      it('dispatches RECEIVE_PLANETS when planets have been fetched', () => {
        const planets = { 1: { id: 1, name: "Mercury", description: "The morning star" } };
        APIUtil.fetchAllPlanets = jest.fn(() => Promise.resolve(planets));
        const expectedActions = [{ type: "RECEIVE_PLANETS", planets }];

        return store.dispatch(requestAllPlanets()).then(() => {
          expect(store.getActions()).toEqual(expectedActions);
        });
      });
    });

    describe('requestSinglePlanet', () => {
      it('should export a requestSinglePlanet function', () => {
        expect(typeof requestSinglePlanet).toEqual('function');
      });

      it('dispatches RECEIVE_SINGLE_PLANET when a single planet has been fetched', () => {
        const planet = { id: 1, name: "Mercury", description: "The morning star" };
        APIUtil.fetchSinglePlanet = jest.fn(id => Promise.resolve(planet));
        const expectedActions = [{ type: "RECEIVE_SINGLE_PLANET", planet }];

        return store.dispatch(requestSinglePlanet(1)).then(() => {
          expect(store.getActions()).toEqual(expectedActions);
        });
      });
    });
  });
});
