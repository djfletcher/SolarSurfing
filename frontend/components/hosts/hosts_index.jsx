import React from 'react';
import HostsIndexItem from './hosts_index_item';

class HostsIndex extends React.Component {
  render() {
    debugger;
    return(
      <div className="hosts-index">
        <ul>
          { this.props.hosts.map(host => HostsIndexItem(host)) }
        </ul>
      </div>
    );
  }
}

export default HostsIndex;
