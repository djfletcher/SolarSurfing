import React from 'react';
// import ReactBootstrapSlider from 'react-bootstrap-slider';
import Rheostat from 'rheostat';
import NumericInput from 'react-numeric-input';
import { Button, DropdownButton, MenuItem } from 'react-bootstrap';

class OrbitalMapSlider extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: 0, rotationAmount: 0, numTravelers: 1 };
    this.highlightPlanet = this.highlightPlanet.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onValuesUpdated = this.onValuesUpdated.bind(this);
    this.handleNumTravelers = this.handleNumTravelers.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
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
    // window.alert(sliderState.values[0]);
  }

  // orbitalPeriod(planet, rotationAmount) {
  //   const orbitalPeriods = {
  //     mercury: 0.241,
  //     venus: 0.616,
  //     earth: 1.000,
  //     mars: 1.882,
  //     jupiter: ‎11.862,
  //     saturn: 29.457,
  //     uranus: 84.021,
  //     neptune: 164.882
  //   };
  //
  //   return ({
  //     transform: `rotate(${orbitalPeriods[planet] * rotationAmount}deg)`
  //   });
  // }

  onValuesUpdated(sliderState) {
    const value = sliderState.values[0];
    this.setState({
      value: value,
      rotationAmount: value * 100
    });

  }

  handleNumTravelers(valueAsNumber) {
    this.setState({ numTravelers: valueAsNumber });
  }

  handleSearch() {

  }

  render() {
    const min = 0;
    const max = 400;
    const { value, rotationAmount } = this.state;

    const orbitalPeriod = planet => {
      const orbitalPeriods = {
        mercury: 5,
        venus: 8,
        earth: 12,
        moon: 2,
        mars: 20,
        jupiter: 30,
        saturn: 60,
        uranus: 70,
        neptune: 100
      };

      return ({
        transform: `rotate(${rotationAmount / orbitalPeriods[planet]}deg)`
        // WebkitAnimationDuration: '1s',
        // MozAnimationDuration: '1s'
      });
    };

    return (
      <div className="orbital-map-and-search-container">
        <section className="search-container">
          <ul className="explore-and-num-travelers-container">
            <li className="explore">
              <DropdownButton
                title="Explore"
                id="1">
                <MenuItem eventKey="mercury">Mercury</MenuItem>
                <MenuItem eventKey="venus">Venus</MenuItem>
                <MenuItem eventKey="earth">Earth</MenuItem>
                <MenuItem eventKey="mars">Mars</MenuItem>
                <MenuItem eventKey="jupiter">Jupiter</MenuItem>
                <MenuItem eventKey="saturn">Saturn</MenuItem>
                <MenuItem eventKey="uranus">Uranus</MenuItem>
                <MenuItem eventKey="neptune">Neptune</MenuItem>
              </DropdownButton>
            </li>
            <li className="num-travelers">
              <p>Travelers:</p>
              <NumericInput
                min={ 1 }
                max={ 12 }
                value={ this.state.numTravelers }
                onChange={ this.handleNumTravelers } />
            </li>
            <li>
              <Button bsStyle="primary" onClick={ this.handleSearch }>Search</Button>
            </li>
          </ul>
          <div className="travel-year">
            <p>Year of Travel: { value }</p>
          </div>
          <div className="rheostat-container">
            <Rheostat
              min={ min }
              max={ max }
              values={ [value] }
              onChange={ this.onChange }
              onValuesUpdated={ this.onValuesUpdated }
            />
          </div>
        </section>
        <section className="orbital-map-container">

          <ul className="solarsystem">
            <li className="sun-orbit">
              <a href="#sun"><span id="sun"></span></a>
            </li>
            <li className="mercury-orbit" style={ orbitalPeriod("mercury") }>
              <a href="#mercury"><span id="mercury"></span></a>
            </li>
            <li className="venus-orbit" style={ orbitalPeriod("venus") }>
              <a href="#venus"><span id="venus"></span></a>
            </li>
            <li className="earth-orbit" style={ orbitalPeriod("earth") }>
              <a href="#earth"><span id="earth">
                <span className="moon" style={ orbitalPeriod("moon") }></span>
              </span></a>
            </li>
            <li className="mars-orbit" style={ orbitalPeriod("mars") }>
              <a href="#mars"><span id="mars"></span></a>
            </li>
            <li className="jupiter-orbit" style={ orbitalPeriod("jupiter") }>
              <a href="#jupiter"><span id="jupiter"></span></a>
            </li>
            <li className="saturn-orbit" style={ orbitalPeriod("saturn") }>
              <a href="#saturn"><span id="saturn"></span>
              <span className="ring"></span></a>
            </li>
            <li className="uranus-orbit" style={ orbitalPeriod("uranus") }>
              <a href="#uranus"><span id="uranus"></span></a>
            </li>
            <li className="neptune-orbit" style={ orbitalPeriod("neptune") }>
              <a href="#neptune"><span id="neptune"></span></a>
            </li>
          </ul>

        </section>
      </div>
    );
  }
}


export default OrbitalMapSlider;
