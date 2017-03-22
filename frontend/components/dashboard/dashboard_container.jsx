import { connect } from 'react-redux';
import { requestAllPlanets } from '../../actions/planets_actions';
import Dashboard from './dashboard';

const mapStateToProps = ({ planetsIndex }) => ({
  planets: planetsIndex
});

const mapDispatchToProps = dispatch => ({
  requestAllPlanets: () => dispatch(requestAllPlanets())
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
