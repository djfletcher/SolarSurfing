import React from 'react';
import HostsIndexItem from './hosts_index_item';

class HostsIndex extends React.Component {

  render() {
    return(
      <div className="hosts-index-container">
        <h1>{ this.props.planet } Hosts</h1>
        <ul className="hosts-index">
          { this.props.hosts.map((host, index) => <HostsIndexItem host={ host } key={index} />) }
        </ul>
      </div>
    );
  }
}

export default HostsIndex;
