import React from 'react';
import { hashHistory } from 'react-router';
import { Nav, NavItem } from 'react-bootstrap';

const About = ({ location }) => (
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
    <div className="about-container">
      <h1>About SolarSurfing</h1>
      <p>SolarSurfing is created by me, Daniel Fletcher, as an exercise in React, Redux, and Rails. The project was motivated, at some level, by a desire to go to space; but since I can't do that quite yet I decided to make this groovy site instead.</p>
      <p>If you are looking for a fullstack engineer who has experience with Ruby, Rails, Javascript, React, Redux, HTML5, CSS3, Node, Java, and SQL (or someone who can rapidly learn another framework) please feel free to contact me. My github username is <a target="_blank" href="https://github.com/djfletcher/SolarSurfing">djfletcher</a>, you may find my linkedin profile <a target="_blank" href="https://www.linkedin.com/in/daniel-fletcher-525727119/">here</a>, and my email is daniel.j.fletcher2@gmail.com. Happy SolarSurfing!</p>
    </div>
  </div>
);

export default About;
