# API Endpoints

## HTML API

### Root

+ `GET /` - loads React web app

## JSON API

### Users

+ `POST /api/users` - join
+ `PATCH /api/users` - update profile

### Session

+ `POST /api/session` - login
+ `DELETE /api/session` - logout

### Planets

+ `GET /api/planets` - requested by OrbitalMap to construct PlanetsIndexItems
  + accepts name param for spots search
+ `GET /api/planets/:planet_id`

### Hosts

+ `GET /api/hosts`
  + accepts planet_id as search params
+ `GET /api/planets/:planet_id/hosts` - show all hosts (HostsIndex) on a particular planet
+ `GET /api/planets/:planet_id/hosts/:host_id` - show HostsDetail for a particular host

### Requests

+ `GET /api/requests`
  + accepts guest_id or host_id as search params
+ `POST /api/requests`
+ `DELETE /api/requests/:request_id`

### Reviews

+ `GET /api/hosts/:host_id/reviews`
+ `POST /api/hosts/:host_id/reviews`
+ `DELETE /api/hosts/:host_id/reviews/:review_id`
