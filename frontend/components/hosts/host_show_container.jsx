import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { requestSingleHost } from '../../actions/hosts_actions';
import HostShow from './host_show';

const mapStateToProps = ({ hostShow }) => ({
  id: hostShow.id,
  username: hostShow.username,
  bio: hostShow.bio,
  imageUrl: hostShow.imageUrl,
  planetId: hostShow.planetId
});

const mapDispatchToProps = (dispatch, { params }) => ({
  requestHost: () => dispatch(requestSingleHost(params.hostId))
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(HostShow));
