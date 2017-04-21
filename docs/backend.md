# Backend

SolarSurfing is built using Ruby on Rails and is hosted on Heroku. The backend provides RESTful APIs and responds to requests in JSON format.

## Heroku

Heroku Scheduler is used to automatically ping the Heroku dyno every 10 minutes, keeping it awake for faster client response.

## Database

PostgreSQL RDBMS is used for Heroku.

## Authentication

BCrypt is used to salt and hash passwords for a secure authentication system.
