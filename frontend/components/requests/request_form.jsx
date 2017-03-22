import React from 'react';
import { Button } from 'react-bootstrap';

class RequestForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { arriveDate: "", departDate: "", numTravelers: 1, errors: [] };
    // this.updateBody = this.updateBody.bind(this);
    // this.updateRating = this.updateRating.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  update(field) {
    return (e) => {
      e.preventDefault();
      this.setState({ [field]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    // this.props.createRequest(this.state);
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

    return (
      <div className="request-form-container">
        <h2>Request to Stay with { this.props.hostName }</h2>
        { this.renderErrors() }
        <form className="request-form" onSubmit={ this.handleSubmit }>
          <input
            type="date"
            onChange={ this.update('arriveDate') }
            value={ this.state.arriveDate }
            className="request-date"
          />
          <input
            type="date"
            onChange={ this.update('departDate') }
            value={ this.state.departDate }
            className="request-date"
          />
          <input
            type="number"
            onChange={ this.update('numTravelers') }
            value={ this.state.numTravelers }
            className="request-num-travelers"
          />
          <Button type="submit" bsStyle="primary">Submit</Button>
        </form>
      </div>
    );
  }
}

export default RequestForm;
