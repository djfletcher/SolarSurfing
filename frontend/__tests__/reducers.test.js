/* globals jest */

import HostShowReducer from '../reducers/host_show_reducer';
import RootReducer from '../reducers/root_reducer';
import { createStore } from 'redux';

describe('Reducers', () => {
  describe('HostShowReducer', () => {
    it('exports an function', () => {
      expect(typeof HostShowReducer).toEqual('function');
    });

    it('should initialize with an empty object as the default state', () => {
      expect(HostShowReducer(undefined, {})).toEqual({});
    });

    it('should return the previous state if an action is not matched', () => {
      const oldState = { 1: 'oldState' };
      const newState = HostShowReducer(oldState, { type: 'unmatched type' });
      expect(newState).toEqual(oldState);
    });

    describe('handling the RECEIVE_SINGLE_HOST action', () => {
      let action,
          testHost;

      beforeEach(() => {
        testHost = { 1: 'testHost' };
        action = {
          type: 'RECEIVE_SINGLE_HOST',
          host: testHost
        };
      });

      it('should replace the state with the action\'s host', () => {
        const state = HostShowReducer(undefined, action);
        expect(state).toEqual(testHost);
      });

      it('should not modify the old state', () => {
        let oldState = { 1: 'oldState' };
        HostShowReducer(oldState, action);
        expect(oldState).toEqual({ 1: 'oldState' });
      });
    });

    describe('handling the RECEIVE_REVIEW action', () => {
      let action,
          existingReviews,
          newReview;

      beforeEach(() => {
        existingReviews = {
          reviews: [{ id: 1, body: 'review1' }, { id: 2, body: 'review2' }]
        };
        newReview = { id: 3, body: 'new review' };
        action = {
          type: 'RECEIVE_REVIEW',
          review: newReview
        };
      });

      it('should add the review to the host\'s array of reviews', () => {
        let state = HostShowReducer(existingReviews, action);
        expect(state.reviews[2]).toEqual(newReview);
      });

      it('should not affect the other reviews in the state', () => {
        let state = HostShowReducer(existingReviews, action);
        expect(state.reviews[1]).toEqual({ id: 2, body: 'review2' });
      });
    });
  });


  describe('RootReducer', () => {
    let testStore;

    beforeAll(() => {
      testStore = createStore(RootReducer);
    });

    it('exports a function', () => {
      expect(typeof RootReducer).toEqual('function');
    });

    it('includes the HostShowReducer under the key `hostShow`', () => {
      const host = { id: 1, username: 'testHost', reviews: [{ id: 1, body: 'review1' }] };
      const action = { type: 'RECEIVE_SINGLE_HOST', host };
      testStore.dispatch(action);

      expect(testStore.getState().hostShow).toEqual(HostShowReducer({ id: 2, username: 'oldHost', reviews: [] }, action));
    });
  });
});
