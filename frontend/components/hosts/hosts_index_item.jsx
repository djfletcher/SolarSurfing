import React from 'react';
import { Link } from 'react-router';

class HostsIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hover: false };
    // this.imageStyle = { backgroundcolor: 'red' };
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

//
//   render() {
//     const { id, username, imageUrl, planetId } = this.props.host;
//
//     return(
//       <li
//         className="hosts-index-item"
//         onMouseEnter={ this.toggleHover }
//         onMouseLeave={ this.toggleHover }
//       >
//         <Link to={ `/planets/${planetId}/hosts/${id}` }>
//           <img src={imageUrl} alt={username} className="host-thumbnail" />
//           <h1 className="hosts-index-item username">{ this.overlayUsernameOnHover }</h1>
//         </Link>
//       </li>
//     );
//   }
// }

export default HostsIndexItem;


// const HostsIndexItem = ({ id, username, imageUrl, planetId }) => {
//   const style = {
//
//   };
//
//   return(
//     <li key={ id } className="hosts-index-item">
//       <Link to={ `/planets/${planetId}/hosts/${id}` }>
//         <img src={imageUrl} alt={username} className="host-thumbnail" />
//       </Link>
//     </li>
//   );
// };
//
// export default HostsIndexItem;
