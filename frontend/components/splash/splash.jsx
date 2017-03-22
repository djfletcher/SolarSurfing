import React from 'react';
import { Button } from 'react-bootstrap';

const Splash = ({ children }) => (
  <div className="splash-container">
    <div className="splash-background top">
      <aside className="image-content">
        <h1>Stay with Locals and Meet Travelers</h1>
        <Button bsStyle="primary">Start Exploring</Button>
      </aside>
    </div>
    <div className="splash-background middle">
      <aside className="image-content">
        <h1>Explore the Solar System</h1>
        <Button bsStyle="primary">How It Works</Button>
      </aside>
      <div className="content-box">
        <div className="connected-with">
          <h1>Alien 1 connected with Alien 2</h1>
        </div>
      </div>
    </div>
    <div className="splash-background bottom">
      <div className="content-box">
        <div className="connected-with">
          <h1>Alien 1 connected with Alien 2</h1>
        </div>
      </div>
      <aside className="image-content">
        <h1>Meet Groovy Extraterrestrials</h1>
        <Button bsStyle="primary">Safety First</Button>
      </aside>
    </div>
  </div>
);

export default Splash;
