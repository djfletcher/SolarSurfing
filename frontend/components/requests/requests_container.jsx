import { connect } from 'react-redux';
import { withRouter } from 'react-router';
// import { requestSingleHost } from '../../actions/hosts_actions';
import Requests from './requests';

const mapStateToProps = ({ session }) => {
  const {
    username,
    imageUrl,
    requestsMade,
    requestsReceived
  } = session.currentUser;
  return ({ imageUrl, username, requestsMade, requestsReceived });
};

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Requests));
