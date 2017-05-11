/* globals jest */

jest.mock('../components/reviews/reviews', () => (
  () => ({ render: () => ( <div></div> ) })
));
jest.mock('../components/requests/request_form_container', () => {
  // need to name function so we can query for it later
  return function RequestFormContainer() {
    return { render: () => ( <div></div> ) }
  }
});

import React from 'react';
import { mount } from 'enzyme';
import HostShowContainer from '../components/hosts/host_show_container';
import HostShow from '../components/hosts/host_show';
// import Reviews from '../components/reviews/reviews';
// import RequestFormContainer from '../components/requests/request_form_container';
import * as HostActions from '../actions/hosts_actions';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const testHost = {
  id: 6,
  username: 'testHost',
  planetId: 5,
  bio: 'I am a test host',
  reviews: []
};
const middlewares = [ thunk ];
const mockStore = configureMockStore(middlewares);
const testStore = mockStore({ hostShow: testHost });

describe('HostShow', () => {
  let HostShowWrapper;

  beforeEach(() => {
      HostActions.requestHost = jest.fn(() => dispatch => {});
      HostShowWrapper = mount(
        <HostShowContainer store={testStore} />
      ).find(HostShow);
    });

  it('correctly maps state to props', () => {
    let { id, username, planetId, bio, reviews } = HostShowWrapper.props();
    expect({ id, username, planetId, bio, reviews }).toEqual(Object.values(testHost));
  });

  it('correctly maps dispatch to props', () => {
    expect(HostShowWrapper.props().requestHost).toBeDefined();
    expect(HostShowWrapper.props().removeReview).toBeDefined();
  });

  it('fetches host after being mounted', () => {
    expect(HostActions.requestHost).toBeCalled();
  });

});
