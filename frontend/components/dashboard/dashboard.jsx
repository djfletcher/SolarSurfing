import React from 'react';
import { Link } from 'react-router';
import { search } from '../../actions/search_actions';
import OrbitalMapContainer from '../orbital_map/orbital_map_container';

const Dashboard = ({ children }) => (
  <div className="dashboard">
    <OrbitalMapContainer />
  </div>
);

export default Dashboard;
