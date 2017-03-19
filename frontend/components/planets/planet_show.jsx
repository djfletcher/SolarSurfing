import React from 'react';
import HostsIndex from '../hosts/hosts_index';

class PlanetShow extends React.Component {

  componentDidMount() {
    this.props.requestPlanet();
  }

  render() {
    if (this.props.name) {
      const background = { backgroundImage: `url(${this.props.imageUrl})` };
      return(
        <div>
          <div className="planet-show" style={ background }>
            <aside className="planet-info">
              <h1>{ this.props.name }</h1>
              <p>{ this.props.description }</p>
            </aside>
          </div>
          <div className="book-host-container">
            { this.props.children }
            <aside className="bookings-module">I AM BOOKINGS MODULE</aside>
          </div>
          <HostsIndex hosts={ this.props.hosts } planet={ this.props.name } />
        </div>
      );
    } else {
      return <div className="planet-show"></div>;
    }
  }
}

export default PlanetShow;
