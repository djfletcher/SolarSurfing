import React from 'react';
import { Link } from 'react-router';
import { Button } from 'react-bootstrap';

import SessionFormContainer from '../session_form/session_form_container';

class Header extends React.Component {
  constructor(props) {
    super(props);
    // this.logo = <a className="logo">SolarSurfing</a>;
    this.logo = <Link to='/dashboard' className="logo">SolarSurfing</Link>;
    this.handleLogout = this.handleLogout.bind(this);
    this.goToMyRequests = this.goToMyRequests.bind(this);
  }

  handleLogout() {
    return this.props.logout()
      .then(() => this.props.router.push('/'));
  }

  goToMyRequests() {
    return this.props.router.push('/requests');
  }

  render() {
    if (this.props.currentUser) {
      return(
        <nav className="header">
          { this.logo }
          <ul className="header-buttons">
            <li>Hello, { this.props.currentUser.username }!</li>
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
