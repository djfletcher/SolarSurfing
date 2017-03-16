export const fetchAllPlanets = () => (
  $.ajax({
    method: 'GET',
    url: '/api/planets'
  })
);

export const fetchSinglePlanet = planetId => (
  $.ajax({
    method: 'GET',
    url: `/api/planets/${planetId}`
  })
);
