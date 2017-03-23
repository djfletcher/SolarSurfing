import React from 'react';

class OrbitalMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = { rotationAmount: 0 };
    this.rotatePlanets = this.rotatePlanets.bind(this);
  }

  rotatePlanets() {
    this.setState({ rotationAmount: this.state.rotationAmount + 20 });
  }

  render() {
    const { rotationAmount } = this.state;
    const style = { transform: `rotate(${rotationAmount}deg)` };

    return (
      <div>
      <button onClick={ this.rotatePlanets }>click me to rotate</button>
      <section className="orbital-map-container">

        <ul className="solarsystem">
          <li className="sun-orbit">
            <a href="#sun"><span id="sun"></span></a>
          </li>
          <li className="mercury-orbit">
            <a href="#mercury"><span id="mercury"></span></a>
          </li>
          <li className="venus-orbit">
            <a href="#venus"><span id="venus"></span></a>
          </li>
          <li className="earth-orbit">
            <a href="#earth"><span id="earth">
              <span className="moon"></span>
            </span></a>
          </li>
          <li className="mars-orbit">
            <a href="#mars"><span id="mars"></span></a>
          </li>
          <li className="jupiter-orbit">
            <a href="#jupiter"><span id="jupiter"></span></a>
          </li>
          <li className="saturn-orbit">
            <a href="#saturn"><span id="saturn"></span>
            <span className="ring"></span></a>
          </li>
          <li className="uranus-orbit">
            <a href="#uranus"><span id="uranus"></span></a>
          </li>
          <li className="neptune-orbit" style={ style }>
            <a href="#neptune"><span id="neptune"></span></a>
          </li>
        </ul>

      </section>
      </div>
    );
  }
}


export default OrbitalMap;
