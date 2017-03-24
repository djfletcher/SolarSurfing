# Backend

SolarSurfing is built using Ruby on Rails and is hosted on Heroku. The backend provides RESTful APIs and responds to requests in JSON format.

## Heroku

NewRelic application performance management (APM) is used to automatically ping the Heroku dyno, keeping it awake for faster client response.

NewRelic also keeps tracks of any server-side error logs.

## Database

PostgreSQL RDBMS is used for Heroku.

## Authentication

BCrypt is used to salt and hash passwords for a secure authentication system.
