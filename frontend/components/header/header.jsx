import React from 'react';
import { Link, hashHistory } from 'react-router';
import { Button } from 'react-bootstrap';

import SessionFormContainer from '../session_form/session_form_container';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.logo = <Link to='/dashboard' className="logo">SolarSurfing</Link>;
    this.handleLogout = this.handleLogout.bind(this);
    this.goToMyRequests = this.goToMyRequests.bind(this);
  }

  handleLogout() {
    return this.props.logout();
  }

  goToMyRequests() {
    return hashHistory.push('/requests');
  }

  render() {
    if (this.props.currentUser) {
      return(
        <nav className="header" id="nav-header">
          { this.logo }
          <ul className="header-buttons">
            <li>Hello, { this.props.currentUser.username }!</li>
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
          <SessionFormContainer />
        </nav>
      );
    }
  }
}


export default Header;
