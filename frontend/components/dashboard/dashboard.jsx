import React from 'react';
import { Link } from 'react-router';
// import OrbitalMap from '../orbital_map/orbital_map';
import OrbitalMapAutoAnimate from '../orbital_map/orbital_map_auto_animate';

const Dashboard = ({ children }) => (
  <div className="dashboard">
    <OrbitalMapAutoAnimate />
    <ul>
      <li><Link to={ '/planets/1' }>Mercury</Link></li>
      <li><Link to={ '/planets/2' }>Venus</Link></li>
      <li><Link to={ '/planets/3' }>Earth</Link></li>
      <li><Link to={ '/planets/4' }>Mars</Link></li>
      <li><Link to={ '/planets/5' }>Jupiter</Link></li>
      <li><Link to={ '/planets/6' }>Saturn</Link></li>
      <li><Link to={ '/planets/7' }>Uranus</Link></li>
      <li><Link to={ '/planets/8' }>Neptune</Link></li>
    </ul>
  </div>
);

export default Dashboard;
