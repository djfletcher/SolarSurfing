/* globals jest */

// jest.mock('../components/reviews/reviews', () => <div></div>);
jest.mock('../components/reviews/reviews', () => (
  () => ({ render: () => ( <div></div> ) })
));
// jest.mock('../components/requests/request_form_container', () => (
//   <div id='request-form-container'></div>
// ));
jest.mock('../components/requests/request_form_container', () => {
  // need to name function so we can query for it later
  return function RequestFormContainer() {
    return { render: () => ( <div id='request-form-container'></div> ) }
  }
});

import React from 'react';
import { mount } from 'enzyme';
import HostShowContainer from '../components/hosts/host_show_container';
import * as HostActions from '../actions/hosts_actions';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const testHost = {
  id: 6,
  username: 'testHost',
  bio: 'I am a test host',
  imageUrl: 'url',
  planetId: 5,
  reviews: []
};
const session = { currentUser: { username: 'user', id: 4 } };
const middlewares = [ thunk ];
const mockStore = configureMockStore(middlewares);
const testStore = mockStore({ hostShow: testHost, session });

describe('HostShow', () => {
  let HostShowWrapper;

  beforeEach(() => {
      HostActions.requestHost = jest.fn(() => dispatch => {});
      HostActions.removeReview = jest.fn(() => dispatch => {});
      HostShowWrapper = mount(
        <HostShowContainer store={testStore} />
      ).find('#book-host-reviews-container');
    });

  it('correctly maps state to props', () => {
    expect(HostShowWrapper.props()).toEqual(Object.values(testHost));
  });

  it('correctly maps dispatch to props', () => {
    expect(HostShowWrapper.props().requestHost).toBeDefined();
    expect(HostShowWrapper.props().removeReview).toBeDefined();
  });

  it('fetches host after being mounted', () => {
    expect(HostActions.requestHost).toBeCalled();
  });

  it('contains a RequestFormContainer component', () => {
    const requestForm = HostShowWrapper.find('#request-form-container');
    expect(requestForm.length).toBe(1);
  });
});
