import React from 'react';


const Reviews = reviews => {
  debugger;
  const reviewsList = reviews.map((review, index) => (
    <li key={ index }>
      <p>Review By: { review.author_id }</p>
      <p>Review For: { review.host_id }</p>
      <p>Body: { review.body }</p>
      <p>Rating: { review.rating }</p>
    </li>
  ));

  return(
    <div className="reviews-container">
      <h1>Reviews</h1>
      <ul className="reviews-index">
        { reviewsList }
      </ul>
    </div>
  );
};

export default Reviews;
