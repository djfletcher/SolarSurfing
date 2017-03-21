import * as APIUtil from '../util/hosts_api_util';

export const RECEIVE_SINGLE_HOST = 'RECEIVE_SINGLE_HOST';
export const RECEIVE_REVIEW = "RECEIVE_REVIEW";

export const receiveSingleHost = host => ({
  type: RECEIVE_SINGLE_HOST,
  host
});

export const receiveReview = review => ({
  type: RECEIVE_REVIEW,
  review
});

export const requestSingleHost = hostId => dispatch => {
  return APIUtil.fetchSingleHost(hostId)
    .then(host => dispatch(receiveSingleHost(host)));
};

export const createReview = review => dispatch => (
  APIUtil.createReview(review)
    .then(review => dispatch(receiveReview(review)))
);
