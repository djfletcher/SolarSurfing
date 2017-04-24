import React from 'react';
import { Link } from 'react-router';

class RequestsIndexItem extends React.Component {

  parseDate(date) {
    const parseMonth = numericString => {
      switch(numericString) {
        case '01':
        return 'January';
        case '02':
        return 'February';
        case '03':
        return 'March';
        case '04':
        return 'April';
        case '05':
        return 'May';
        case '06':
        return 'June';
        case '07':
        return 'July';
        case '08':
        return 'August';
        case '09':
        return 'September';
        case '10':
        return 'October';
        case '11':
        return 'November';
        case '12':
        return 'December';
        default:
        return 'January';
      }
    };

    const year = date.slice(0, 4);
    const month = parseMonth(date.slice(5, 7));
    const day = date.slice(8, 10);
    return `${month} ${day}, ${year}`;
  }

  render() {
    const {
      arriveDate,
      departDate,
      guestName,
      guestId,
      hostName,
      hostId,
      planetName,
      planetImageUrl,
      planetId
    } = this.props.request;

    const bookingDates = `${this.parseDate(arriveDate)} to ${this.parseDate(departDate)}`;

    let name, title;
    if (this.props.type === "host") {
      name = <Link to={ `/planets/${planetId}/hosts/${guestId}` }>{ guestName }</Link>;
      title = 'Guest';
    } else {
      name = <Link to={ `/planets/${planetId}/hosts/${hostId}` }>{ hostName }</Link>;
      title = 'Host';
    }

    return(
      <li className="requests-index-item">
        <div className="requests-index-item-planet-thumbnail">
          <img src={ planetImageUrl } alt={ planetName }/>
        </div>
        <div className="requests-index-item-content">
          <div className="requests-index-item-planet-name">
            <p>{ planetName }</p>
          </div>
          <div className="requests-index-item-username">
            <p>{ title }: { name }</p>
          </div>
          <div className="requests-index-item-booking-dates">
            <p>{ bookingDates }</p>
          </div>
        </div>
      </li>
    );
  }
}

export default RequestsIndexItem;
