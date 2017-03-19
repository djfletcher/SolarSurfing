import React from 'react';

class HostShow extends React.Component {

  componentDidMount() {
    this.props.requestHost();
  }

  render() {
    return(
      <div className="host-show">
        Name: { this.props.username }
        Id: { this.props.id }
        Bio: { this.props.bio }
        ImageUrl: { this.props.imageUrl }
        PlanetId: { this.props.planetId }
      </div>
    );
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
