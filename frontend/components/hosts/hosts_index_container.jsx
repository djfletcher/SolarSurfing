import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { requestHosts } from '../actions/hosts/hosts_actions';
import HostsIndex from './hosts_index';

const mapStateToProps = ({ planetShow }) => ({
  hosts: planetShow.hosts
});

const mapDispatchToProps = dispatch => ({});
//
// const mapDispatchToProps = dispatch => ({
//   requestHosts:
// });

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(HostsIndex));
