import * as APIUtil from '../util/session_api_util';
import { hashHistory } from 'react-router';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});

export const clearErrors = () => ({
  type: RECEIVE_ERRORS,
  errors: []
});

export const signup = user => dispatch => (
  APIUtil.signup(user)
    .then(user => dispatch(receiveCurrentUser(user)))
    .then(() => hashHistory.push('/dashboard'))
    .fail(errors => dispatch(receiveErrors(errors)))
);

export const login = user => dispatch => (
  APIUtil.login(user)
    .then(user => dispatch(receiveCurrentUser(user)))
    .then(() => hashHistory.push('/dashboard'))
    .fail(errors => dispatch(receiveErrors(errors)))
);

export const demoLogin = () => dispatch => (
  APIUtil.login({
    username: 'Earthling',
    password: 'earthling1'
  }).then(user => dispatch(receiveCurrentUser(user)))
    .then(() => hashHistory.push('/dashboard'))
    .fail(errors => dispatch(receiveErrors(errors)))
);

export const logout = () => dispatch => (
  APIUtil.logout()
    .then(() => dispatch(receiveCurrentUser(null)))
    .then(() => hashHistory.push('/'))
);
