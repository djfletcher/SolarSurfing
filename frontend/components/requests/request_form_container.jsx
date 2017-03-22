import { connect } from 'react-redux';
import { createRequest } from '../../actions/hosts_actions';

import RequestForm from './request_form';

const mapStateToProps = ({ session, hostShow }) => ({
  guestId: session.currentUser.id,
  hostId: hostShow.id,
  errors: session.errors
});

const mapDispatchToProps = dispatch => ({
  createRequest: request => dispatch(createRequest(request))
});

export default connect(mapStateToProps, mapDispatchToProps)(RequestForm);
