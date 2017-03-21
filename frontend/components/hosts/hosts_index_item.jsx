import React from 'react';
import { Link } from 'react-router';

class HostsIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hover: false };
    this.toggleHover = this.toggleHover.bind(this);
    this.overlayUsernameOnHover = this.overlayUsernameOnHover.bind(this);
  }

  toggleHover() {
    this.setState({ hover: !this.state.hover });
  }

  overlayUsernameOnHover() {
    if (this.state.hover) {
      return this.props.username;
    }
  }

  render() {
    const { id, username, imageUrl, planetId } = this.props.host;

    return(
      <li className="hosts-index-item">
        <Link to={ `/planets/${planetId}/hosts/${id}` }>
          <img src={ imageUrl } alt={ username } className="host-thumbnail" />
          <div className="hosts-index-item-username">
            <p>{ username }</p>
          </div>
        </Link>
      </li>
    );
  }
}

export default HostsIndexItem;
