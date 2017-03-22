import React from 'react';
import { Button } from 'react-bootstrap';

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { body: "", rating: null, errors: [] };
    this.updateBody = this.updateBody.bind(this);
    this.updateRating = this.updateRating.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  // componentWillReceiveProps(nextProps){
  //   debugger;
  //   if (this.props.hostUsername !== nextProps.hostUsername) {
  //     this.setState({ body: "", rating: null, errors: [] });
  //   }
  // }

  updateBody(e) {
    e.preventDefault();
    this.setState({ body: e.target.value });
  }

  updateRating(e) {
    // e.preventDefault();
    this.setState({ rating: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const review = this.state;
    review.author_id = this.props.authorId;
    review.host_id = this.props.params.hostId;

    this.props.createReview(review)
      .then(() => this.setState({ body: "", rating: null, errors: [] }))
      .fail(r => this.setState({ errors: r.responseJSON }));
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
    return(
      <div className="review-form-container">
        <h2>Leave { this.props.hostUsername } a Review</h2>
        { this.renderErrors() }
        <form
          name="reviewForm"
          onSubmit={ this.handleSubmit }
          className="review-form"
        >
          <input
            type="text"
            className="review-form-body"
            value={ this.state.body }
            onChange={ this.updateBody }
            placeholder="The perfect host!"
          />
          <div className="review-form-radio-group-and-submit">
            <div className="review-form-radio-group">
              <input
                type="radio"
                name="rating"
                onChange={ this.updateRating }
                value="1"
                checked={ this.state.rating === '1' }
              />
              <input
                type="radio"
                name="rating"
                onChange={ this.updateRating }
                value="2"
                checked={ this.state.rating === '2' }
              />
              <input
                type="radio"
                name="rating"
                onChange={ this.updateRating }
                value="3"
                checked={ this.state.rating === '3' }
              />
              <input
                type="radio"
                name="rating"
                onChange={ this.updateRating }
                value="4"
                checked={ this.state.rating === '4' }
              />
              <input
                type="radio"
                name="rating"
                onChange={ this.updateRating }
                value="5"
                checked={ this.state.rating === '5' }
              />
            </div>

            <Button type="submit" bsStyle="primary">Submit</Button>
          </div>
        </form>
      </div>
    );
  }

}


export default ReviewForm;
