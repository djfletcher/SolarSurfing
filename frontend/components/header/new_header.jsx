import React from 'react';
import { Link, hashHistory } from 'react-router';
import { Button } from 'react-bootstrap';

import SessionFormContainer from '../session_form/session_form_container';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentUser: props.currentUser };
    this.logo = <Link to='/dashboard' className="logo">SolarSurfing</Link>;
    this.handleLogout = this.handleLogout.bind(this);
    this.goToMyRequests = this.goToMyRequests.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (
      this.state.currentUser && !nextProps.currentUser ||
        !this.state.currentUser && nextProps.currentUser
    ) {
      this.setState({ currentUser: nextProps.currentUser });
    }
  }

  handleLogout() {
    return this.props.logout();
  }

  goToMyRequests() {
    return hashHistory.push('/requests');
  }

  render() {
    if (this.state.currentUser) {
      return(
        <nav className="header">
          { this.logo }
          <ul className="header-buttons">
            <li>Hello, { this.state.currentUser.username }!</li>
            <li>
              <Button
                className="back-to-planets-index"
                onClick={ () => hashHistory.push('/dashboard') }
                bsStyle="primary">
                Solar System Map
              </Button>
            </li>
            <li>
              <Button
                onClick={ this.goToMyRequests }
                bsStyle="primary"
              >My Requests</Button>
            </li>
            <li>
              <Button
                onClick={ this.handleLogout }
                bsStyle="primary"
              >Log Out</Button>
            </li>
          </ul>
        </nav>
      );
    } else {
      return(
        <nav className="header">
          { this.logo }
          <div className="session-form">
            <ul className="header-buttons">
              <li><Button
                className="login open-modal-button"
                onClick={ this.props.openLogin }
                bsStyle="primary"
              >
                Log In
              </Button></li>
            <li><Button
                className="join open-modal-button"
                onClick={ this.props.openJoin }
                bsStyle="primary"
              >
                Join
              </Button></li>
            </ul>
          </div>
        </nav>
      );
    }
  }
}


export default Header;
