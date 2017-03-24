import { connect } from 'react-redux';
import { search } from '../../actions/search_actions';
import OrbitalMap from './orbital_map_slider';

// const mapStateToProps = ({ searchParams }) => ({
//   searchParams
// });

const mapDispatchToProps = dispatch => ({
  search: searchParams => dispatch(search(searchParams))
});

export default connect(null, mapDispatchToProps)(OrbitalMap);
