import { connect } from 'react-redux';
import { withRouter } from 'react-router';
// import { requestHosts } from '../actions/hosts/hosts_actions';
import { requestSinglePlanet } from '../../actions/planets_actions';
import PlanetShow from './planet_show';


const mapStateToProps = ({ planetShow }) => ({
  id: planetShow.id,
  name: planetShow.name,
  description: planetShow.description,
  imageUrl: planetShow.imageUrl
});

const mapDispatchToProps = (dispatch, { params }) => ({
  // requestHosts: () => dispatch(requestHosts(params.planetId)),
  requestPlanet: () => dispatch(requestSinglePlanet(params.planetId))
});

// const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(PlanetShow));
