/* globals jest */

import * as ReviewActions from '../actions/hosts_actions';
import React from 'react';
import ReviewFormContainer from '../components/reviews/review_form_container';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { shallow } from 'enzyme';

const testReview = { body: "test review", rating: 4 };
const testUser = { username: 'user', id: 4 };
const testHost = { username: 'host' };

const middlewares = [ thunk ];
const mockStore = configureMockStore(middlewares);
const testStore = mockStore({
  session: { currentUser: testUser, errors: [] },
  hostShow: testHost
});

describe('review form container', () => {
  let reviewFormWrapper,
      ratingInputs,
      bodyInput;

  beforeEach(() => {
    ReviewActions.createReview = jest.fn(review => dispatch => {});
    ReviewActions.removeReview = jest.fn(id => dispatch => {});
  });

  describe('creating a new review', () => {
    beforeEach(() => {
      reviewFormWrapper = shallow(
        <ReviewFormContainer store={testStore} />
      );

      ratingInputs = reviewFormWrapper.find('input').findWhere(input => (
        input.type === 'radio'
      ));
      bodyInput = reviewFormWrapper.find('text');
    });

    it('correctly maps state to props', () => {
      expect(reviewFormWrapper.props()).toEqual({
        authorId: testUser.id,
        hostUsername: testHost.username,
        errors: [],
        currentUser: testUser
      });
    });

    it('correctly maps dispatch to props', () => {
      expect(reviewFormWrapper.props().createReview).toBeDefined();
    });

    it('updates the rating and body fields when they change', () => {
      ratingInputs[2].simulate('change', { target: { checked: true }});
      expect(reviewFormWrapper.state('rating')).toEqual(3);
      bodyInput.simulate('change', { target: { value: 'Great spot!' }});
      expect(reviewFormWrapper.state('body')).toEqual('Great spot!');
    });

    it('triggers the correct action when submitted', () => {
      ratingInputs[3].simulate('change', { target: { checked: true }});
      bodyInput.simulate('change', { target: { value: testReview.body }});
      reviewFormWrapper.find('form').simulate('submit');

      expect(ReviewActions.createReview).toBeCalledWith(testReview);
    });
  });
});
