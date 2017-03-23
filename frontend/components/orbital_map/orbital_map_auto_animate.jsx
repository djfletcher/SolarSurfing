import React from 'react';
import ReactBootstrapSlider from 'react-bootstrap-slider';

class OrbitalMapAutoAnimate extends React.Component {
  constructor(props) {
    super(props);
    this.state = { planetName: null };
    this.highlightPlanet = this.highlightPlanet.bind(this);
  }

  highlightPlanet(e) {
    e.preventDefault();
    debugger;
    const oldPlanet = document.getElementById(this.state.planetName);
    this.setState({ planetName: e.target.value });
    const newPlanet = document.getElementById(this.state.planetName);
    oldPlanet.style = { border: "none" };
    newPlanet.style = { border: "4px solid yellow" };
  }


  // highlightPlanet(e) {
  //   e.preventDefault();
  //   if (this.state.planetName) {
  //     const oldPlanet = document.getElementById(this.state.planetName);
  //     oldPlanet.style = { border: "none" };
  //   }
  //   debugger;
  //   this.setState({ planetName: e.target.value });
  //   const newPlanet = document.getElementById(e.target.value);
  //   newPlanet.style = { border: "4px solid yellow" };
  // }

  render() {
    return (
      <div>
        <form>
          <select value={this.state.planetName} onChange={this.highlightPlanet}>
            <option disabled selected value="default"> -- Select Planet -- </option>
            <option value="mercury">Mercury</option>
            <option value="venus">Venus</option>
            <option value="earth">Earth</option>
            <option value="mars">Mars</option>
            <option value="jupiter">Jupiter</option>
            <option value="saturn">Saturn</option>
            <option value="uranus">Uranus</option>
            <option value="neptune">Neptune</option>
          </select>
        </form>
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
          <li className="neptune-orbit">
            <a href="#neptune"><span id="neptune"></span></a>
          </li>
        </ul>

      </section>
      </div>
    );
  }
}


export default OrbitalMapAutoAnimate;
