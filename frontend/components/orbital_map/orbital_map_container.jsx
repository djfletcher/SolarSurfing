import { connect } from 'react-redux';
import { search } from '../../actions/search_actions';
// import OrbitalMap from './orbital_map';
import OrbitalMap from './new_orbital_map';

const mapDispatchToProps = dispatch => ({
  search: searchParams => dispatch(search(searchParams))
});

export default connect(null, mapDispatchToProps)(OrbitalMap);
