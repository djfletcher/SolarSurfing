import React from 'react';

class PlanetShow extends React.Component {

  componentDidMount() {
    this.props.requestPlanet();
  }

  render() {
    const background = { backgroundImage: `url(${this.props.imageUrl})` };
    return(
      <div className="planet-show" style={ background }>
        <h1>{ this.props.name }</h1>
        <p>{ this.props.description }</p>
      </div>
    );
  }
}

export default PlanetShow;
