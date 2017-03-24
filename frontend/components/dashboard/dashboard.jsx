import React from 'react';
import { Link } from 'react-router';
import { search } from '../../actions/search_actions';
// import OrbitalMap from '../orbital_map/orbital_map';
// import OrbitalMapAutoAnimate from '../orbital_map/orbital_map_auto_animate';
import OrbitalMapContainer from '../orbital_map/orbital_map_container';

const Dashboard = ({ children }) => (
  <div className="dashboard">
    <OrbitalMapContainer />
  </div>
);

export default Dashboard;
