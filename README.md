# SolarSurfing

[SolarSurfing][solarsurfing] is a full-stack web application inspired by Couchsurfing. It utilizes Ruby on Rails on the backend, a PostgreSQL database, and React.js with a Redux implementation of Flux architecture on the frontend.

![Splash page][splash-photo]

## Features

+ User account creation and authentication with password encryption using BCrypt
+ Interactive solar system map, with responsive orbiting animations
+ Show page for each location, with list of local users currently accepting guests
+ Booking requests based on location, host, and date of travel
+ Host profiles and reviews

![Interactive orbital map of our solar system][orbital-map-gif]

## Project Design

SolarSurfing was designed and built in two weeks by me, Daniel Fletcher.

A [proposal][proposal] was drafted to help provide an implementation timeline during the development process.

Alongside the design proposal, I prepared a [database schema][schema], [component hierarchy][components], and a series of [wireframes][wireframes] for the user interface.

![Hosts available at a searchable location][hosts-photo]

## Technology

SolarSurfing is a single-page application built on Rails and React.js.

+ [Backend technology][backend]
+ [Frontend technology][frontend]

## Future Implementations

+ Display realtime information on planets, such as current distance from Earth, and atmospheric conditions using NASA's Horizons API.
+ Allow users to submit new planets to the database, pending approval by minimum number of other users.
+ Add dynamic list of "popular hosts" to the dashboard.
+ Add testing suites using RSpec for the database models and Enzyme or Jest for the React components.


[solarsurfing]: http://solarsurfing.space
[proposal]: ./docs/README.md
[schema]: ./docs/schema.md
[components]: ./docs/component-hierarchy.md
[wireframes]: ./docs/wireframes
[backend]: ./docs/backend.md
[frontend]: ./docs/frontend.md
[splash-photo]: ./docs/screenshots/splash.png
[orbital-map-gif]: ./docs/screenshots/orbital_map1.gif
[hosts-photo]: ./docs/screenshots/hosts.png
[host-detail-photo]: ./docs/screenshots/host_detail.png
