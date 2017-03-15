import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { login } from '../../actions/session/session_actions';
import Login from './login';

const mapStateToProps = ({ session }, ownProps) => ({
  loggedIn: Boolean(session.currentUser),
  errors: session.errors
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  login: user => dispatch(login(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Login));
