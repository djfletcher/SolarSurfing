import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { signup, clearErrors } from '../../actions/session/session_actions';
import Join from './join';

const mapStateToProps = ({ session }, ownProps) => ({
  loggedIn: Boolean(session.currentUser),
  errors: session.errors
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  signup: user => dispatch(signup(user)),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Join));
