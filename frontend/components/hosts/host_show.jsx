import React from 'react';
import { hashHistory } from 'react-router';
import Reviews from '../reviews/reviews';
import RequestFormContainer from '../requests/request_form_container';

class HostShow extends React.Component {

  componentDidMount() {
    this.props.requestHost(this.props.params.hostId)
      .then(() => this.moveWindow());
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.params.hostId !== nextProps.params.hostId) {
      this.props.requestHost(nextProps.params.hostId)
        .then(() => this.moveWindow());
    }
  }

  componentWillUpdate(nextProps) {
    if (!nextProps.currentUser) {
      hashHistory.push('/');
    }
  }

  moveWindow() {
    const hostShow = document.getElementById('book-host-reviews-container');
    const { top } = hostShow.getBoundingClientRect();
    if (top < -25) {
      window.scrollBy(0, -20);
      setTimeout(this.moveWindow.bind(this), 1);
    } else if (top > 25) {
      window.scrollBy(0, 20);
      setTimeout(this.moveWindow.bind(this), 1);
    }
  }

  render() {
    const { id, username, bio, imageUrl, planetId, reviews } = this.props;

    if (username) {
      return(
        <div id="book-host-reviews-container">
          <div className="book-host-container">
            <div className="host-show">
              <h1 className="host-username">Stay with { username }</h1>
              <div className="host-detail clearfix">
                <img
                  src={ imageUrl }
                  alt={ username }
                  className="host-profile-pic"
                />
                <p className="host-bio">{ bio }</p>
              </div>
            </div>
            <RequestFormContainer />
          </div>
          { Reviews(
              reviews,
              this.props.removeReview.bind(this),
              this.props.currentUser.id
            )
          }
        </div>
      );
    } else {
      return <div id="book-host-reviews-container"></div>;
    }
  }
}

export default HostShow;
