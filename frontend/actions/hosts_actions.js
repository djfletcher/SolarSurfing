import * as APIUtil from '../util/hosts_api_util';

export const RECEIVE_SINGLE_HOST = 'RECEIVE_SINGLE_HOST';

export const receiveSingleHost = host => ({
  type: RECEIVE_SINGLE_HOST,
  host
});

export const requestSingleHost = hostId => dispatch => {
  return APIUtil.fetchSingleHost(hostId)
    .then(host => dispatch(receiveSingleHost(host)));
};
