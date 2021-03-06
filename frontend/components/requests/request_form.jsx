import React from 'react';
import { Button } from 'react-bootstrap';
import { some } from 'lodash';
import { hashHistory } from 'react-router';

class RequestForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      arriveDate: props.searchParams.arriveYear ?
        `${props.searchParams.arriveYear}-01-01` : "",
      departDate: props.searchParams.arriveYear ?
        `${props.searchParams.arriveYear + 1}-01-01`: "",
      numTravelers: props.searchParams.numTravelers ?
        props.searchParams.numTravelers : 1,
      errors: [],
      alreadyBooked: this.alreadyBooked(
        props.currentUserRequestsMade,
        props.hostId
      )
    };
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.goToMyRequests = this.goToMyRequests.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
    this.alreadyBooked = this.alreadyBooked.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.hostId !== nextProps.hostId) {
      this.setState({
        alreadyBooked: this.alreadyBooked(
          nextProps.currentUserRequestsMade,
          nextProps.hostId
        ),
        errors: []
      });
    }
  }

  alreadyBooked(requestsMade, hostId) {
    return some(requestsMade, request => {
      if (request.hostId === hostId) { return true; }
    });
  }

  update(field) {
    return (e) => {
      e.preventDefault();
      this.setState({ [field]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const request = {
      guest_id: this.props.guestId,
      host_id: this.props.hostId,
      arrive_date: this.state.arriveDate,
      depart_date: this.state.departDate,
      num_travelers: this.state.numTravelers
    };
    this.props.createRequest(request)
      .then(req => this.setState({ alreadyBooked: true }))
      .fail(res => this.setState({ errors: res.responseJSON }));
  }

  goToMyRequests() {
    hashHistory.push('/requests');
  }

  renderErrors() {
    if (this.state.errors.length > 0) {
      const errors = this.state.errors.map((err, idx) => (
        <li key={idx}>{ err }</li>
      ));
      return <ul className="form-errors">{ errors }</ul>;
    }
  }

  render() {
    const confirmation = (
      <div className="request-form-container">
        <h2>Booking request sent to { this.props.hostName }!</h2>
          <Button
            onClick={ this.goToMyRequests }
            bsStyle="primary"
          >Go to My Requests</Button>
      </div>
    );

    const form = (
      <div className="request-form-container">
        <h2>Send Request</h2>
        { this.renderErrors() }
        <form className="request-form" onSubmit={ this.handleSubmit }>
          <div className="request-dates">
            <label>Arrive
              <input
                type="date"
                onChange={ this.update('arriveDate') }
                value={ this.state.arriveDate }
                className="request-dates"
              />
            </label>
            <label>Depart
              <input
                type="date"
                onChange={ this.update('departDate') }
                value={ this.state.departDate }
                className="request-dates"
              />
            </label>
          </div>
          <label className="request-num-travelers">Number of Travelers
            <select
              value={this.state.numTravelers}
              onChange={this.update('numTravelers')}
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
            </select>
          </label>
          <Button type="submit" bsStyle="primary">Submit</Button>
        </form>
      </div>
    );

    if (this.state.alreadyBooked) {
      return confirmation;
    } else {
      return form;
    }
  }
}

export default RequestForm;
