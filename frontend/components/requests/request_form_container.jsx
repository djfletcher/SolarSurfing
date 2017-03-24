import { connect } from 'react-redux';
import { createRequest } from '../../actions/requests_actions';

import RequestForm from './request_form';

const mapStateToProps = ({ session, hostShow, searchParams }) => ({
  guestId: session.currentUser.id,
  hostId: hostShow.id,
  hostName: hostShow.username,
  searchParams: searchParams,
  errors: session.errors,
  currentUserRequestsMade: session.currentUser.requestsMade,
  currentUserRequestsReceived: session.currentUser.requestsReceived
});

const mapDispatchToProps = dispatch => ({
  createRequest: request => dispatch(createRequest(request))
});

export default connect(mapStateToProps, mapDispatchToProps)(RequestForm);
