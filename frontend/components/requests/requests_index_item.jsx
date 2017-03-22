import React from 'react';

class RequestsIndexItem extends React.Component {

  render() {
    const request = this.props.request;
    const bookingDates = `${request.arriveDate} - ${request.departDate}`;

    return(
      <li className="requests-index-item">
        <div className="requests-index-item-planet-thumbnail">
          <img src={ request.planetImageUrl } alt={ request.planetName }/>
        </div>
        <div className="requests-index-item-username">
          <p>{ request.hostName }</p>
        </div>
        <div className="requests-index-item-booking-dates">
          <p>{ bookingDates }</p>
        </div>
      </li>
    );
  }
}

export default RequestsIndexItem;
