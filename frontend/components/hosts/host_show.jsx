import React from 'react';

class HostShow extends React.Component {

  componentDidMount() {
    this.props.requestHost(this.props.params.hostId);
  }

  componentWillReceiveProps(nextProps) {
    // debugger;
    if (this.props.params.hostId !== nextProps.params.hostId) {
      // debugger;
      this.props.requestHost(nextProps.params.hostId);
    }
  }

  render() {
    const { id, username, bio, imageUrl, planetId } = this.props;

    if (username) {
      return(
        <div className="host-show clearfix">
          <h1 className="host-username">Stay with { username }</h1>
          <img
            src={ imageUrl }
            alt={ username }
            className="host-profile-pic"
          />
          <p className="host-bio">{ bio }</p>
        </div>
      );
    } else {
      return <div className="host-show"></div>;
    }
  }
}

export default HostShow;
