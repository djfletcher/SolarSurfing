import React from 'react';
import RequestsIndexItem from './requests_index_item';

class Requests extends React.Component {
  render() {
    const requestsMadeIndex = this.props.requestsMade.map(
      (request, i) => <RequestsIndexItem key={ i } request={ request } />
    );

    const requestsReceivedIndex = this.props.requestsReceived.map(
      (request, i) => <RequestsIndexItem key={ i } request={ request } />
    );

    return(
      <div className="requests-container">
        <section className="requests-profile">
          <img src={ this.props.imageUrl } />
          <h1>{ this.props.username }</h1>
        </section>
        <section className="requests-index-container">
          <section className="requests-made-index-container">
            <h1 className="requests-made-header">My Travel Plans</h1>
            <ul className="requests-made-index">
              { requestsMadeIndex }
            </ul>
          </section>
          <section className="requests-received-index-container">
            <h1>My Guests</h1>
            <ul className="requests-received-index">
              { requestsReceivedIndex }
            </ul>
          </section>
        </section>
      </div>
    );
  }

}

export default Requests;
