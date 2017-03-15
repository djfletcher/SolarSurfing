import { connect } from 'react-redux';
import { logout } from '../../actions/session/session_actions';
import { withRouter } from 'react-router';
import Header from './header';

const mapStateToProps = ({ session }) => ({
  currentUser: session.currentUser
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Header));
