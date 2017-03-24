import React from 'react';
import { Link } from 'react-router';
import { Button } from 'react-bootstrap';
import ReviewFormContainer from './review_form_container';

const Reviews = (reviews, removeReview, currentUserId) => {
  const reviewsList = reviews.map((review, index) => {

    const {
      id,
      body,
      rating,
      authorId,
      authorUsername,
      authorImageUrl,
      authorPlanetId
    } = review;

    const starImage = 'https://res.cloudinary.com/dmgrq5xrb/image/upload/v1490127525/star_ygpdna.png';

    const starRating = num => {
      const stars = [];
      for (let i = 0; i < num; i++) {
        stars.push(<img key={ i } src={ starImage } />);
      }
      return stars;
    };

    const deleteButton = () => {
      if (authorId === currentUserId) {
        return (
          <Button
            bsSize="small"
            bsStyle="danger"
            onClick={ () => removeReview(id) }>Delete
          </Button>
        );
      }
    };

    return(
      <li key={ index } className="reviews-index-item">
        <ul className="reviews-index-item-content">
          <li>
            <Link to={ `/planets/${authorPlanetId}/hosts/${authorId}` }>
              <img src={ authorImageUrl } className="review-thumbnail" />
            </Link>
          </li>
          <li className="review-body">
            <p>{ body }</p>
            { deleteButton() }
          </li>
          <li className="review-rating">
            <aside>{ starRating(rating) }</aside>
          </li>
        </ul>
      </li>
    );
  });

  return(
    <div className="reviews-container">
      <h1>Reviews</h1>
      <ul className="reviews-index">
        { reviewsList }
        <ReviewFormContainer />
      </ul>
    </div>
  );
};

export default Reviews;
