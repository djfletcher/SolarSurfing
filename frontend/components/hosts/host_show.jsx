import React from 'react';
// import ReactTransitionGroup from 'react-addons-transition-group';
// import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

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

  moveWindow() {
    const hostShow = document.getElementById('book-host-reviews-container');
    const { top } = hostShow.getBoundingClientRect();
    window.scrollBy(0, -25);
    // debugger;
    if (top < 0) {
      // debugger;
      setTimeout(this.moveWindow.bind(this), 1);
    }
  }

  render() {
    const { id, username, bio, imageUrl, planetId } = this.props;

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
            <aside className="bookings-module">I AM BOOKINGS MODULE</aside>
          </div>
          <aside className="reviews">I AM REVIEWS</aside>
        </div>
      );
    } else {
      return <div id="book-host-reviews-container"></div>;
    }
  }
}

export default HostShow;

// render() {
//   const { id, username, bio, imageUrl, planetId } = this.props;
//
//   // if (username) {
//     return(
//       <ReactCSSTransitionGroup
//         transitionName="example"
//         transitionEnterTimeout={3000}
//         transitionLeaveTimeout={3000}
//       >
//         <div className="book-host-container" key="hosts">
//           <div className="host-show">
//             <h1 className="host-username">Stay with { username }</h1>
//             <div className="host-detail clearfix">
//               <img
//                 src={ imageUrl }
//                 alt={ username }
//                 className="host-profile-pic"
//               />
//               <p className="host-bio">{ bio }</p>
//             </div>
//           </div>
//           <aside className="bookings-module">I AM BOOKINGS MODULE</aside>
//         </div>
//       </ReactCSSTransitionGroup>
//     );
//   // }
// }
