import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { requestSinglePlanet } from '../../actions/planets_actions';
import PlanetShow from './planet_show';


const mapStateToProps = ({ planetShow }) => ({
    id: planetShow.id,
    name: planetShow.name,
    description: planetShow.description,
    imageUrl: planetShow.imageUrl,
    hosts: planetShow.hosts
});

//
// const mapStateToProps = ({ planetsIndex }, { params }) => {
//   const { id, name, description, imageUrl, hosts } = planetsIndex[params.planetId];
//   return ({ id, name, description, imageUrl, hosts });
// };


const mapDispatchToProps = dispatch => ({
  requestPlanet: planetId => dispatch(requestSinglePlanet(planetId))
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(PlanetShow));
