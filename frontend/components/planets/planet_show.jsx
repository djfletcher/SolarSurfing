import React from 'react';

class PlanetShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestPlanet();
  }

  render() {
    return(
      <div>
        <ul>
          <li>ID: { this.props.id }</li>
          <li>Name: { this.props.name }</li>
          <li>Description: { this.props.description }</li>
          <li>Image Url: { this.props.imageUrl }</li>
        </ul>
      </div>
    );
  }
}

export default PlanetShow;
