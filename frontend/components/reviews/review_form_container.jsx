import { connect } from 'react-redux';
import { createReview } from '../../actions/hosts_actions';
import { withRouter } from 'react-router';

import ReviewForm from './review_form';

const mapStateToProps = ({ session }) => ({
  authorId: session.currentUser.id,
  errors: session.errors
});

const mapDispatchToProps = dispatch => ({
  createReview: review => dispatch(createReview(review))
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ReviewForm));
