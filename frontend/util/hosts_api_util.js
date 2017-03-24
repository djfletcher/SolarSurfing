export const fetchSingleHost = hostId => (
  $.ajax({
    method: 'GET',
    url: `/api/users/${hostId}`
  })
);

export const createReview = review => (
  $.ajax({
    method: 'POST',
    url: 'api/reviews',
    data: { review }
  })
);
