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
      autoOrbiting: false,
      searchEnabled: false,
      sliderShowing: false,
      sliderUsed: false
    };
    this.orbitPlanets = this.orbitPlanets.bind(this);
    this.toggleSlider = this.toggleSlider.bind(this);
    this.selectPlanet = this.selectPlanet.bind(this);
    this.highlightPlanet = this.highlightPlanet.bind(this);
    this.sliderUsed = this.sliderUsed.bind(this);
    this.onValuesUpdated = this.onValuesUpdated.bind(this);
    this.handleNumTravelers = this.handleNumTravelers.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  componentDidUpdate(nextProps, nextState) {
    if (this.state.planet !== nextState.planet && nextState.sliderUsed) {
      this.setState({ searchEnabled: true });
    } else if ((this.state.sliderUsed !== nextState.sliderUsed) &&
        this.state.planet) {
      this.setState({ searchEnabled: true });
    }
  }

  orbitPlanets() {
    if (this.state.autoOrbiting) {
      $("ul.solarsystem").find("li").removeClass("orbiting");
      $("ul.solarsystem li.earth-orbit").find("span").removeClass("orbiting");
    } else if (!this.state.autoOrbiting) {
      $("ul.solarsystem").find("li").addClass("orbiting");
      $("ul.solarsystem li.earth-orbit").find("span").addClass("orbiting");
    }
  }

  toggleSlider() {
    // if (this.state.sliderShowing) {
    //   $("div.rheostat-background").css("animation-name", "sliderShrink");
    // }
    this.setState({ sliderShowing: !this.state.sliderShowing });
    this.setState({ autoOrbiting: !this.state.autoOrbiting });
  }

  selectPlanet(planet) {
    this.highlightPlanet(planet);
    this.setState({ planet });
  }

  highlightPlanet(planet) {
    if (this.state.planet) {
      const oldPlanet = $(`#${this.state.planet}`);
      oldPlanet.removeClass("highlighted");
    }
    const newPlanet = $(`#${planet}`);
    newPlanet.addClass("highlighted");
  }

  sliderUsed(sliderState) {
    this.setState({ sliderUsed: true });
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

  render() {
    const { year, rotationAmount, planet } = this.state;
    const min = 2017;
    const max = 2417;

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
      });
    };

    const planetTitle = planet.charAt(0).toUpperCase() + planet.slice(1);

    const whenButton = () => {
      const buttonText = (this.state.sliderShowing || this.state.searchEnabled) ?
        `Year of Travel: ${year}` : `When`;
      const dropup = this.state.sliderShowing;
      return(
        <DropdownButton
          dropup={ dropup }
          title={ buttonText }
          id="select-travel-year"
          onClick={ this.toggleSlider } />
      );
    };

    const slider = () => {
      if (this.state.sliderShowing) {
        return(
          <div className="rheostat-container">
            <Rheostat
              min={ min }
              max={ max }
              values={ [year] }
              onChange={ this.sliderUsed }
              onValuesUpdated={ this.onValuesUpdated }
              />
          </div>
        );
      }
    };

    const searchButton = () => {
      if (this.state.searchEnabled) {
        return(
          <Button
            id="search-button"
            bsStyle="primary"
            onClick={ this.handleSearch }>Search
          </Button>
        );
      }
    };

    this.orbitPlanets();

    const searchContainerHeight = () => {
      if (!this.state.sliderShowing && !this.state.searchEnabled) {
        return '65px';
      } else if (this.state.sliderShowing && !this.state.searchEnabled) {
        return '130px';
      } else if (!this.state.sliderShowing && this.state.searchEnabled) {
        return '120px';
      } else if (this.state.sliderShowing && this.state.searchEnabled) {
        return '175px';
      }
    };

    const searchContainerStyle = { height: searchContainerHeight() };

    return (
      <div className="orbital-map-and-search-container">
        <section
          className="search-container"
          style={ searchContainerStyle }>
          <ul className="explore-and-num-travelers-container">
            <li className="search-where">
              <DropdownButton
                title={ planetTitle || "Where" }
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
            <li className="search-when">{ whenButton() }</li>
            <li className="num-travelers">
              <p>Travelers:</p>
              <NumericInput
                min={ 1 }
                max={ 12 }
                value={ this.state.numTravelers }
                onChange={ this.handleNumTravelers } />
            </li>
          </ul>
          { slider() }
          { searchButton() }
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
