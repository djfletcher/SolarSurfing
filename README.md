# SolarSurfing

[SolarSurfing][solarsurfing] is is a full-stack web application inspired by Couchsurfing. It utilizes Ruby on Rails on the backend, a PostgreSQL database, and React.js with a Redux architectural framework on the frontend.

SolarSurfing is created by me, Daniel Fletcher, as an exercise in React, Redux, and Rails. The project was motivated, at some level, by a desire to go to space; but since I can't do that quite yet I decided to make this groovy site instead.

## Features

+ User account creation and authentication with password encryption using BCrypt
+ Interactive solar system map, with responsive orbiting animations
+ Show page for each location, with list of local users currently accepting guests
+ Booking requests based on location, host, and date of travel
+ Host profiles and reviews

## Project Design

SolarSurfing was designed and built in two weeks.

A [proposal][proposal] was drafted to help provide an implementation timeline during the development process.

Alongside the design proposal, I prepared a [database schema][schema], [component hierarchy][components], and a series of [wireframes][wireframes] for the user interface.

## Technology

SolarSurfing uses React and Redux to asynchronously send and receive HTTP requests and re-render affected components as needed, for a smooth user experience.

## Future Implementations

+ Display realtime information on planets, such as current distance from Earth, and atmospheric conditions using NASA's Horizons API.


[solarsurfing]: https://solarsurfing.herokuapp.com
[proposal]: ./docs/README.md
[schema]: ./docs/schema.md
[components]: ./docs/component-hierarchy.md
[wireframes]: ./docs/wireframes
[splash-photo]: ./app/assets/images/splash.png
[orbital-map-photo]: ./app/assets/images/orbital_map.png
[hosts-photo]: ./app/assets/images/hosts.png
[host-detail-photo]: ./app/assets/images/host_detail.png
