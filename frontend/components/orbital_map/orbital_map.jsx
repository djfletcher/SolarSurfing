import React from 'react';
import ReactBootstrapSlider from 'react-bootstrap-slider';

class OrbitalMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = { rotationAmount: 0, year: "default" };
    this.rotatePlanets = this.rotatePlanets.bind(this);
  }

  rotatePlanets(e) {
    e.preventDefault();
    this.setState({
      rotationAmount: this.state.rotationAmount + 10,
      year: e.target.value
    });
  }

  render() {
    const { rotationAmount } = this.state;
    const style = { transform: `rotate(${rotationAmount}deg)` };

    return (
      <div>
        <form>
          <select value={this.state.year} onChange={this.rotatePlanets}>
            <option disabled selected value="default"> -- Year of Travel -- </option>
            <option value="2017">2017</option>
            <option value="2018">2018</option>
            <option value="2019">2019</option>
            <option value="2020">2020</option>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
            <option value="2023">2023</option>
            <option value="2024">2024</option>
          </select>
        </form>
      <section className="orbital-map-container">

        <ul className="solarsystem">
          <li className="sun-orbit" style={ style }>
            <a href="#sun"><span id="sun"></span></a>
          </li>
          <li className="mercury-orbit" style={ style }>
            <a href="#mercury"><span id="mercury"></span></a>
          </li>
          <li className="venus-orbit" style={ style }>
            <a href="#venus"><span id="venus"></span></a>
          </li>
          <li className="earth-orbit" style={ style }>
            <a href="#earth"><span id="earth">
              <span className="moon" style={ style }></span>
            </span></a>
          </li>
          <li className="mars-orbit" style={ style }>
            <a href="#mars"><span id="mars"></span></a>
          </li>
          <li className="jupiter-orbit" style={ style }>
            <a href="#jupiter"><span id="jupiter"></span></a>
          </li>
          <li className="saturn-orbit" style={ style }>
            <a href="#saturn"><span id="saturn"></span>
            <span className="ring"></span></a>
          </li>
          <li className="uranus-orbit" style={ style }>
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
