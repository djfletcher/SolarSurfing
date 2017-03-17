import React from 'react';

class PlanetShow extends React.Component {

  componentDidMount() {
    this.props.requestPlanet();
  }

  render() {
    if (this.props.name) {
      const background = { backgroundImage: `url(${this.props.imageUrl})` };
      return(
        <div className="planet-show" style={ background }>
          <aside className="planet-info">
            <h1>{ this.props.name }</h1>
            <p>{ this.props.description }</p>
          </aside>
        </div>
      );
    } else {
      return <div className="planet-show"></div>;
    }
  }
}

export default PlanetShow;
