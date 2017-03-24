import React from 'react';
import HostsIndex from '../hosts/hosts_index';
import { Button } from 'react-bootstrap';

class PlanetShow extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = { backgroundImage: `url(${this.props.imageUrl})` };
  // }

  componentWillReceiveProps(nextProps) {
    if (this.props.params.planetId !== nextProps.params.planetId) {
      this.props.requestPlanet(nextProps.params.planetId);
    }
  }

  componentDidMount() {
    this.props.requestPlanet(this.props.params.planetId);
      // .then(planet => this.setState({ backgroundImage: planet.imageUrl }));
  }

  componentWillUnmount() {
    // clear background image
  }

  render() {
    if (this.props.name) {
      const background = { backgroundImage: `url(${this.props.imageUrl})` };
      return(
        <div className="planet-show-container">
          <div className="planet-show" style={ background }>
            <aside className="planet-info">
              <h1>{ this.props.name }</h1>
              <p>{ this.props.description }</p>
            </aside>
          </div>
          { this.props.children }
          <HostsIndex hosts={ this.props.hosts } planet={ this.props.name } />
        </div>
      );
    } else {
      // const blankBackground = { backgroundColor: 'black' };
      return <div className="planet-show"></div>;
    }
  }
}

export default PlanetShow;
