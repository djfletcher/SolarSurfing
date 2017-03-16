// import React from 'react';
// import { Link } from 'react-router';
// import { Button } from 'react-bootstrap';
//
// import JoinContainer from '../join/join_container';
// import LoginContainer from '../login/login_container';
//
// class Header extends React.Component {
//   constructor(props) {
//     super(props);
//     this.logo = <a className="logo">SolarSurfing</a>;
//     // this.state = { loginModalShown: false, joinModalShown: false };
//
//     this.handleLogout = this.handleLogout.bind(this);
//     this.handleDemoLogin = this.handleDemoLogin.bind(this);
//     // this.toggleModal = this.toggleModal.bind(this);
//     // this.openLoginModal = this.openLoginModal.bind(this);
//     // this.openJoinModal = this.openJoinModal.bind(this);
//   }
//
//   handleLogout() {
//     return this.props.logout()
//       .then(() => this.props.router.push('/'));
//   }
//
//   handleDemoLogin() {
//     return this.props.demoLogin()
//       .then(() => this.props.router.push("dashboard"));
//   }
//
//   // openLoginModal() {
//   //   this.setState({ loginModalShown: !this.state.loginModalShown });
//   // }
//   //
//   // openJoinModal() {
//   //   this.setState({ joinModalShown: !this.state.joinModalShown });
//   // }
//
//   // toggleModal(modalType) {
//   //   // debugger;
//   //   if (modalType === "login") {
//   //     this.setState({ joinModalShown: true });
//   //   } else if (modalType === "join") {
//   //     this.setState({ loginModalShown: true });
//   //   } else {
//   //     this.setState({ joinModalShown: false, loginModalShown: false })
//   // }
//   // }
//
//   render() {
//     if (this.props.currentUser) {
//       return(
//         <nav className="header">
//           { this.logo }
//           <ul className="header-buttons">
//             <li>Hello, { this.props.currentUser.username }!</li>
//             <li><Button onClick={ this.handleLogout } bsStyle="primary">Log Out</Button></li>
//           </ul>
//         </nav>
//       );
//     } else {
//       return(
//         <nav className="header">
//           { this.logo }
//           <ul className="header-buttons">
//             <li><LoginContainer /></li>
//             <li><JoinContainer /></li>
//             <li><Button onClick={ this.handleDemoLogin } bsStyle="primary">Demo</Button></li>
//           </ul>
//         </nav>
//       );
//     }
//   }
// }
//
//
// export default Header;
//



import React from 'react';
import { Link } from 'react-router';
import { Button } from 'react-bootstrap';

import JoinContainer from '../join/join_container';
import LoginContainer from '../login/login_container';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.logo = <a className="logo">SolarSurfing</a>;
    this.state = { loginModalShown: false, joinModalShown: false };

    this.handleLogout = this.handleLogout.bind(this);
    this.handleDemoLogin = this.handleDemoLogin.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    // this.openLoginModal = this.openLoginModal.bind(this);
    // this.openJoinModal = this.openJoinModal.bind(this);
  }

  handleLogout() {
    return this.props.logout()
      .then(() => this.props.router.push('/'));
  }

  handleDemoLogin() {
    return this.props.demoLogin()
      .then(() => this.props.router.push("dashboard"));
  }

  // openLoginModal() {
  //   this.setState({ loginModalShown: !this.state.loginModalShown });
  // }
  //
  // openJoinModal() {
  //   this.setState({ joinModalShown: !this.state.joinModalShown });
  // }

  toggleModal(modalType) {
    // debugger;
    if (modalType === "login") {
      this.setState({ joinModalShown: true });
    } else if (modalType === "join") {
      this.setState({ loginModalShown: true });
    } else {
      this.setState({ joinModalShown: false, loginModalShown: false });
    }
  }

  render() {
    if (this.props.currentUser) {
      return(
        <nav className="header">
          { this.logo }
          <ul className="header-buttons">
            <li>Hello, { this.props.currentUser.username }!</li>
            <li><Button onClick={ this.handleLogout } bsStyle="primary">Log Out</Button></li>
          </ul>
        </nav>
      );
    } else {
      return(
        <nav className="header">
          { this.logo }
          <ul className="header-buttons">
            <li><LoginContainer
              showModal={ this.state.loginModalShown }
              toggleModal={ this.toggleModal }
            /></li>
            <li><JoinContainer
              showModal={ this.state.joinModalShown }
              toggleModal={ this.toggleModal }
            /></li>
            <li><Button onClick={ this.handleDemoLogin } bsStyle="primary">Demo</Button></li>
          </ul>
        </nav>
      );
    }
  }
}


export default Header;
