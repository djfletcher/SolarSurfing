import React from 'react';
// import ReactBootstrapSlider from 'react-bootstrap-slider';
import Rheostat from 'rheostat';
import NumericInput from 'react-numeric-input';
import { Button, DropdownButton, MenuItem } from 'react-bootstrap';

class OrbitalMapSlider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      year: 2017,
      rotationAmount: 0,
      numTravelers: 1,
      planet: ""
      // autoScroll: true
    };
    this.autoScroll = this.autoScroll.bind(this);
    this.highlightPlanet = this.highlightPlanet.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onValuesUpdated = this.onValuesUpdated.bind(this);
    this.handleNumTravelers = this.handleNumTravelers.bind(this);
    this.selectPlanet = this.selectPlanet.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  componentDidMount() {
    // this.autoScroll();
  }

  autoScroll() {
    // if (this.state.autoScroll) {
    if (this.state.year > 400) {
      this.setState({
        year: 0
      });
      setTimeout(this.autoScroll, 100);
    } else {
      this.setState({
        rotationAmount: this.state.year * 100,
        year: this.state.year + 1
      });
      setTimeout(this.autoScroll, 100);
    }
  }

  highlightPlanet(planet) {
    if (this.state.planet) {
      const oldPlanet = document.getElementById(this.state.planet);
      oldPlanet.style.border = "none";
    }
    const newPlanet = document.getElementById(planet);
    newPlanet.style.border = "2px solid yellow";
  }


  selectPlanet(planet) {
    this.highlightPlanet(planet);
    this.setState({ planet });
  }

  onChange(sliderState) {
    // window.alert(sliderState.values[0]);
  }

  onValuesUpdated(sliderState) {
    const year = sliderState.values[0];
    this.setState({
      year: year,
      rotationAmount: (year - 2017) * 100
    });

  }

  handleNumTravelers(valueAsNumber) {
    this.setState({ numTravelers: valueAsNumber });
  }


  handleSearch(e) {
    const planetIds = {
      "mercury": 1,
      "venus": 2,
      "earth": 3,
      "mars": 4,
      "jupiter": 5,
      "saturn": 6,
      "uranus": 7,
      "neptune": 8
    };
  }

  alert(eventKey) {
    window.alert(eventKey);
  }

  render() {
    const min = 2017;
    const max = 2417;
    const { year, rotationAmount, planet } = this.state;

    const orbitalPeriod = planetName => {
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
        transform: `rotate(${rotationAmount / orbitalPeriods[planetName]}deg)`
        // WebkitAnimationDuration: '1s',
        // MozAnimationDuration: '1s'
      });
    };

    const planetTitle = planet.charAt(0).toUpperCase() + planet.slice(1);

    // const mars = document.getElementById("mars");
    // if (mars) {
    //   mars.style.border = "4px solid yellow";
    // }

    return (
      <div className="orbital-map-and-search-container">
        <section className="search-container">
          <ul className="explore-and-num-travelers-container">
            <li className="explore">
              <DropdownButton
                title={ planetTitle || "Explore" }
                id="1"
                onSelect={ this.selectPlanet }>
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
            <p>Year of Travel: { year }</p>
          </div>
          <div className="rheostat-container">
            <Rheostat
              min={ min }
              max={ max }
              values={ [year] }
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
