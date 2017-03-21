# API Endpoints

## HTML API

### Root

+ `GET /` - loads React web app

## JSON API

### Users

+ `POST /api/users` - join
+ `PATCH /api/users/:user_id` - update profile

### Session

+ `POST /api/session` - login
+ `DELETE /api/session` - logout

### Planets

+ `GET /api/planets`
  + accepts name or planet_id as search param
+ `GET /api/planets/:planet_id`

### Requests

+ `GET /api/requests`
  + accepts guest_id or host_id as search params
+ `POST /api/requests`
+ `DELETE /api/requests/:request_id`

### Hosts

+ `GET /api/hosts`
  + accepts planet_id as search params
+ `GET /api/planets/:planet_id/hosts` - get all hosts (HostsIndex) for a particular planet
+ `GET /api/planets/:planet_id/hosts/:host_id` - get HostsDetail for a particular host

### Reviews

+ `GET /api/hosts/:host_id/reviews`
+ `POST /api/hosts/:host_id/reviews`
+ `DELETE /api/hosts/:host_id/reviews/:review_id`
