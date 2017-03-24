export const createRequest = request => (
  $.ajax({
    method: 'POST',
    url: 'api/requests',
    data: { request }
  })
);
