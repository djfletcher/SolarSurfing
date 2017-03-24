import React from 'react';
import { hashHistory } from 'react-router';
import Rheostat from 'rheostat';
import NumericInput from 'react-numeric-input';
import { Button, DropdownButton, MenuItem } from 'react-bootstrap';


class OrbitalMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      year: 2210,
      rotationAmount: 0,
      numTravelers: 1,
      planet: "",
      interactive: false,
      searchEnabled: false
      // sliderHandleBouncing: false
    };
    this.makeInteractive = this.makeInteractive.bind(this);
    this.highlightPlanet = this.highlightPlanet.bind(this);
    this.enableSearch = this.enableSearch.bind(this);
    this.onValuesUpdated = this.onValuesUpdated.bind(this);
    this.handleNumTravelers = this.handleNumTravelers.bind(this);
    this.selectPlanet = this.selectPlanet.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    // this.bounceSliderHandle = this.bounceSliderHandle.bind(this);
  }

  componentDidMount() {

  }

  makeInteractive() {
    $("ul.solarsystem").find("li").removeClass("orbiting");
    $("ul.solarsystem li.earth-orbit").find("span").removeClass("orbiting");
    this.setState({ interactive: true });
  }

  highlightPlanet(planet) {
    if (this.state.planet) {
      const oldPlanet = document.getElementById(this.state.planet);
      oldPlanet.style.border = "none";
    }
    const newPlanet = document.getElementById(planet);
    newPlanet.style.border = "6px solid gold";
  }


  selectPlanet(planet) {
    this.highlightPlanet(planet);
    this.setState({ planet });
  }

  enableSearch(sliderState) {
    this.setState({ searchEnabled: true });
    // $(".rheostat-handle").removeClass("animated");
  }

  onValuesUpdated(sliderState) {
    const year = sliderState.values[0];
    this.setState({
      year: year,
      rotationAmount: (year - 2210) * 100
    });
  }

  handleNumTravelers(valueAsNumber) {
    this.setState({ numTravelers: valueAsNumber });
  }


  handleSearch(e) {
    const planetIds = {
      mercury: 1,
      venus: 2,
      earth: 3,
      mars: 4,
      jupiter: 5,
      saturn: 6,
      uranus: 7,
      neptune: 8
    };

    const { numTravelers, year, planet } = this.state;
    if (planet && year) {
      const searchParams = { numTravelers, arriveYear: year };
      this.props.search(searchParams);
      const planetId = planetIds[planet];
      hashHistory.push(`/planets/${planetId}`);
    } else {
      window.alert("You must select a planet and a year.");
    }
  }

  // bounceSliderHandle() {
  //   if ($(".rheostat-handle").length > 0 && !this.state.searchEnabled) {
  //     $(".rheostat-handle").addClass("animated");
  //     $(".rheostat-handle").addClass("bounce");
  //     this.setState({ sliderHandleBouncing: true });
  //   }
  // }

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

    const interactionButton = () => {
      if (this.state.interactive) {
        const buttonText = this.state.searchEnabled ? "Search" : "Slide Timeline";
        return(
          <Button
            bsStyle="primary"
            onClick={ this.handleSearch }
            disabled={ !this.state.searchEnabled }
            >{ buttonText }</Button>
        );
      } else {
        return(
          <DropdownButton
            title={ "Choose Travel Year" }
            id="select-travel-year"
            onClick={ this.makeInteractive } />
        );
      }
    };

    const slider = () => {
      if (this.state.interactive) {
        return(
          <div className="travel-year-container">
            <div className="travel-year">
              <p>Year of Travel: { year }</p>
            </div>
            <div className="rheostat-container">
              <Rheostat
                min={ min }
                max={ max }
                values={ [year] }
                onChange={ this.enableSearch }
                onValuesUpdated={ this.onValuesUpdated }
                />
            </div>
          </div>
        );
      }
    };

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
            <li>{ interactionButton() }</li>
          </ul>
          { slider() }
        </section>
        <section className="orbital-map-container">

          <ul className="solarsystem">
            <li className="sun-orbit orbiting">
              <span id="sun"></span>
            </li>
            <li className="mercury-orbit orbiting" style={ orbitalPeriod("mercury") }>
              <span id="mercury"></span>
            </li>
            <li className="venus-orbit orbiting" style={ orbitalPeriod("venus") }>
              <span id="venus"></span>
            </li>
            <li className="earth-orbit orbiting" style={ orbitalPeriod("earth") }>
              <span id="earth" className="orbiting">
                <span className="moon" style={ orbitalPeriod("moon") }></span>
              </span>
            </li>
            <li className="mars-orbit orbiting" style={ orbitalPeriod("mars") }>
              <span id="mars"></span>
            </li>
            <li className="jupiter-orbit orbiting" style={ orbitalPeriod("jupiter") }>
              <span id="jupiter"></span>
            </li>
            <li className="saturn-orbit orbiting" style={ orbitalPeriod("saturn") }>
              <span id="saturn"></span>
              <span id="saturn-ring" className="ring"></span>
            </li>
            <li className="uranus-orbit orbiting" style={ orbitalPeriod("uranus") }>
              <span id="uranus"></span>
            </li>
            <li className="neptune-orbit orbiting" style={ orbitalPeriod("neptune") }>
              <span id="neptune"></span>
            </li>
          </ul>

        </section>
      </div>
    );
  }
}


export default OrbitalMap;

  //
  //
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
