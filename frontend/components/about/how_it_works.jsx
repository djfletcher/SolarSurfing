import React from 'react';
import { hashHistory } from 'react-router';
import { Nav, NavItem } from 'react-bootstrap';

const HowItWorks = ({ location }) => (
  <div className="site-info-container">
    <div className="site-info-navbar">
      <Nav
        bsStyle="pills"
        stacked
        activeKey={ location.pathname } >
        <NavItem
          eventKey={ '/about' }
          onClick={ () => hashHistory.push('/about') }>About
        </NavItem>
        <NavItem
          eventKey={ '/howitworks' }
          onClick={ () => hashHistory.push('/howitworks') }>How It Works
        </NavItem>
        <NavItem
          eventKey={ '/safety' }
          onClick={ () => hashHistory.push('/safety') }>Safety
        </NavItem>
      </Nav>
    </div>
    <div className="howitworks-container">
      <h1>How It Works</h1>
      <p>SolarSurfing is an interplanetary community of billions of beings across all eight planets of our solar system. Our community is founded on a commitment to sharing our lives, our worlds, our journeys, and our wildly resilient antibodies. SolarSurfing connects interplanetary travelers with a vast network of extraterrestrials willing to share with each other in profound and meaningful ways, making travel a truly social experience.</p>
      <p>If you’re ready to embark on an adventure, search for the planet you plan to visit and browse the local hosts. Look through profiles and reviews to find extraterrestrials you might want to stay with. When you find a few interesting potential hosts, carefully review their profiles and send a request for the dates you’ll be there. We usually recommend sending about five requests, since, after all, the travel dates are often hundreds of years in the future.</p>
    </div>
  </div>
);

export default HowItWorks;
