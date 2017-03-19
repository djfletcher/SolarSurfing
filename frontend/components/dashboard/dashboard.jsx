import React from 'react';
import { Link } from 'react-router';

const Dashboard = ({ children }) => (
  <div>
    I AM DASHBOARD
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