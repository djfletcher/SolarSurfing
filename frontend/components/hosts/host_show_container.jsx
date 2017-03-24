import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { requestSingleHost, removeReview } from '../../actions/hosts_actions';
import HostShow from './host_show';

const mapStateToProps = ({ hostShow, session }) => ({
  id: hostShow.id,
  username: hostShow.username,
  bio: hostShow.bio,
  imageUrl: hostShow.imageUrl,
  planetId: hostShow.planetId,
  reviews: hostShow.reviews,
  currentUser: session.currentUser
});

const mapDispatchToProps = dispatch => ({
  requestHost: hostId => dispatch(requestSingleHost(hostId)),
  removeReview: reviewId => dispatch(removeReview(reviewId))
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(HostShow));
