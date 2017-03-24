import React from 'react';
import { hashHistory } from 'react-router';
import RequestsIndexItem from './requests_index_item';

class Requests extends React.Component {

  componentWillUpdate(nextProps) {
    if (!nextProps.currentUser) {
      hashHistory.push('/');
    }
  }

  render() {
    if (this.props.currentUser) {
      const {
        username,
        imageUrl,
        requestsMade,
        requestsReceived
      } = this.props.currentUser;

      const requestsMadeIndex = requestsMade.slice().reverse().map(
        (request, i) => <RequestsIndexItem key={ i } request={ request } type="guest" />
      );

        const requestsReceivedIndex = requestsReceived.slice().reverse().map(
          (request, i) => <RequestsIndexItem key={ i } request={ request } type="host" />
      );

      return(
        <div className="requests-container">
          <section className="requests-profile">
            <img src={ imageUrl } />
            <h1>{ username }</h1>
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
    } else {
      return <div className="requests-container"></div>;
    }
  }

}

export default Requests;
