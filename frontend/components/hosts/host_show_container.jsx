import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { requestSingleHost } from '../../actions/hosts_actions';
import HostShow from './host_show';

// const mapStateToProps = ({ planetsIndex }, { params }) => {
//   const {
//     id,
//     username,
//     bio,
//     imageUrl,
//     planetId,
//     reviews
//   } = planetsIndex[params.planetId][params.hostId];
//
//   return ({ id, username, bio, imageUrl, planetId, reviews });
// };

const mapStateToProps = ({ hostShow }) => ({
  id: hostShow.id,
  username: hostShow.username,
  bio: hostShow.bio,
  imageUrl: hostShow.imageUrl,
  planetId: hostShow.planetId,
  reviews: hostShow.reviews
});


const mapDispatchToProps = dispatch => ({
  requestHost: hostId => dispatch(requestSingleHost(hostId))
});


export default connect(mapStateToProps, null)(withRouter(HostShow));
