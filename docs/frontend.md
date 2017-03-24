# Frontend

As a single-page application, SolarSurfing utilizes the React.js framework and follows Flux architecture to asynchronously send and receive HTTP requests and re-render only affected components as needed.

## npm

Node package manager (npm) is used to install all of the frontend dependencies.

## Webpack

Webpack conveniently bundles all of the frontend components and Flux parts. The bundled file is located in `/app/assets/javascripts` and included in the main `application.js` file.

## React & Flux

All of the React components, Flux action creators, API utilities, reducers, and stores are located in the [frontend](../frontend) directory.

## jQuery

jQuery is used to make AJAX requests with the Rails server, and for a few CSS styling manipulations within the orbital map.

## Bootstrap & Sass

Site layout and styling are done with Sass and Bootstrap. React Bootstrap expedited the building out of modals, navbars, and stylized buttons.

## Others

Other frontend dependencies include:

- React DOM
- React Router
- React History to manipulating the browser history
- Babel for transpiling JSX into JavaScript.
+ Credit to Alex Girón for the HTML and CSS skeleton used to build out the interactive [Orbital Map](http://neography.com/journal/our-solar-system-in-css3/) found on SolarSurfing's dashboard page.
