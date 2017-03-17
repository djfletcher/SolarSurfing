import React from 'react';
import { Link } from 'react-router';

const HostsIndexItem = ({ id, username, imageUrl, planetId }) => {
  const style = {

  };

  return(
    <li key={ id } className="hosts-index-item">
      <Link to={ `/planets/${planetId}/hosts/${id}` }>
        { username }
        <img src={imageUrl} alt={username} />
      </Link>
    </li>
  );
};

export default HostsIndexItem;
