import * as APIUtil from '../util/requests_api_util';

export const RECEIVE_REQUEST = "RECEIVE_REQUEST";

export const receiveRequest = request => ({
  type: RECEIVE_REQUEST,
  request
});

export const createRequest = request => dispatch => {
  return APIUtil.createRequest(request)
    .then(request => dispatch(receiveRequest(request)));
};
