import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { createRequest } from '../../actions/hosts_actions';

import RequestForm from './request_form';

const mapStateToProps = ({ session, hostShow }) => ({
  guestId: session.currentUser.id,
  hostId: hostShow.id,
  hostName: hostShow.username,
  errors: session.errors,
  currentUserRequestsMade: session.currentUser.requestsMade,
  currentUserRequestsReceived: session.currentUser.requestsReceived
});

const mapDispatchToProps = dispatch => ({
  createRequest: request => dispatch(createRequest(request))
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(RequestForm));
