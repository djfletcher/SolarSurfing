import React from 'react';
// import ReactBootstrapSlider from 'react-bootstrap-slider';
import Rheostat from 'rheostat';

class OrbitalMapSlider extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: 0 };
    this.highlightPlanet = this.highlightPlanet.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onValuesUpdated = this.onValuesUpdated.bind(this);
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

  onChange(sliderState) {
    window.alert(sliderState.values[0]);
  }

  onValuesUpdated(sliderState) {
    this.setState({ value: sliderState.values[0] });
  }

  render() {
    const min = 0;
    const max = 100;
    const { value } = this.state;

    return (
      <div>
        <div>
          <Rheostat
            min={min}
            max={max}
            values={[value]}
            onChange={this.onChange}
            onValuesUpdated={this.onValuesUpdated}
          />
          <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <div>{value}</div>
          </div>
        </div>
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


export default OrbitalMapSlider;
