export const fetchSingleHost = hostId => (
  $.ajax({
    method: 'GET',
    url: `/api/users/${hostId}`
  })
);

export const createReview = review => {
  // debugger;
  return $.ajax({
    method: 'POST',
    url: 'api/reviews',
    data: { review }
  });
};
