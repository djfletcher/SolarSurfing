export const fetchSingleHost = hostId => (
  $.ajax({
    method: 'GET',
    url: `/api/users/${hostId}`
  })
);
