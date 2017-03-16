import { connect } from 'react-redux';
import { demoLogin, logout } from '../../actions/session/session_actions';
import { withRouter } from 'react-router';
import Header from './header';

const mapStateToProps = ({ session }) => ({
  currentUser: session.currentUser
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  demoLogin: () => dispatch(demoLogin())
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Header));
