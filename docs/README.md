SolarSurfing
============

[SolarSurfing.com](https://www.couchsurfing.com)

[Trello Link](https://trello.com/b/zjB9JjRf/solarsurfing)

Minimum Viable Product
----------------------

SolarSurfing is a web application inspired by Couchsurfing that connects interplanetary travelers with alien hosts who invite them to stay at their homes for free. By the end of Week 9, this app will, at a minimum, satisfy the following criteria with smooth, bug-free navigation, adequate seed data, and sufficient CSS styling:

+ Hosting on Heroku
+ New account creation, login, and guest/demo login
+ Spots (planets with many alien hosts)
+ Bookings
+ Spots search (by planet & availability) & interactive solar system map on search
+ Reviews
+ Production README

Design Docs
-----------

+ [Wireframes](https://github.com/djfletcher/SolarSurfing/tree/master/docs/wireframes)
+ [React Components](https://github.com/djfletcher/SolarSurfing/blob/master/docs/component-hierarchy.md)
+ [API Endpoints](https://github.com/djfletcher/SolarSurfing/blob/master/docs/api-endpoints.md)
+ [Database Schema](https://github.com/djfletcher/SolarSurfing/blob/master/docs/schema.md)
+ [Sample State](https://github.com/djfletcher/SolarSurfing/blob/master/docs/sample-state.md)

Implementation Timeline
-----------------------

### Phase 1: Backend setup and Front End User Authentication (1 day)
**Objective:** Functioning rails project with front-end authentication.
### Phase 2: Planets (1 day)
**Objective:** Eight planets with seed data and show pages.
### Phase 3: Hosts (2 days)
**Objective:** Six hosts per planet (repeats okay) each with functioning show pages embedded in their home planet's show page.
### Phase 4: Requests and Reviews (2 days)
**Objective:** Create and delete booking requests. Create and delete reviews. 1-2 seed reviews per host.
### Phase 5: Search bar and interactive solar system map (2 days)
**Objective:** Dynamic movement of planets based on date of booking. Possible JS libraries to use include D3 and JTSL.
### Phase 6: Splash page & about index. Final styling. (2 days)
**Objective:** Tie everything together, include links to my github and linkedin.
### Bonus Features:
+ Realtime information on planets based on date of booking, using NASA's Horizons API
+ Allow users to add new planets to the database
+ Add "popular hosts" to the dashboard
