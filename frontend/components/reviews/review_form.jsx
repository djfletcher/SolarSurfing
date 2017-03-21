import React from 'react';
import { Button } from 'react-bootstrap';

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { body: "", rating: 5 };
  }

  update(field) {
    return (e) => {
      e.preventDefault();
      this.setState({ [field]: e.target.value });
      document.reviewForm.rating[this.state.rating - 1].checked = true;
    };
  }

  handleSubmit(e) {
    e.preventDefault();

  }

  render() {
    const checked = num => {
      if (num === this.state.rating) { return "checked"; }
    };

    return(
      <form name="reviewForm" onSubmit={ this.handleSubmit }>
        <input
          type="text"
          value={ this.state.body }
          onChange={ this.update('body') }
          placeholder="Body..."
        />
        <input
          type="radio"
          name="rating"
          onChange={ this.update('rating') }
          value="1"
        />
        <input
          type="radio"
          name="rating"
          onChange={ this.update('rating') }
          value="2"
        />
        <input
          type="radio"
          name="rating"
          onChange={ this.update('rating') }
          value="3"
        />
        <input
          type="radio"
          name="rating"
          onChange={ this.update('rating') }
          value="4"
        />
        <input
          type="radio"
          name="rating"
          onChange={ this.update('rating') }
          value="5"
        />

        <Button bsStyle="primary">Submit</Button>
      </form>
    );
  }

}


export default ReviewForm;
