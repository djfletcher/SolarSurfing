import React from 'react';

class HostShow extends React.Component {

  componentDidMount() {
    this.props.requestHost(this.props.params.hostId);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.params.hostId !== nextProps.params.hostId) {
      this.props.requestHost(nextProps.params.hostId);
    }
  }

  render() {
    const { id, username, bio, imageUrl, planetId } = this.props;

    if (username) {
      return(
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
          <aside className="bookings-module">I AM BOOKINGS MODULE</aside>
        </div>
      );
    } else {
      return <div className="host-show"></div>;
    }
  }
}

export default HostShow;
