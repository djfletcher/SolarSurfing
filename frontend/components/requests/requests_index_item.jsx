import React from 'react';

class RequestsIndexItem extends React.Component {

  render() {
    const request = this.props.request;

    return(
      <li className="requests-index-item">
        <img src={ imageUrl } alt={ username } className="host-thumbnail" />
        <div className="requests-index-item-username">
          <p>{ username }</p>
        </div>
      </li>
    );
  }
}

}
