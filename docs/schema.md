# Schema information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique
image_url       | string    | not null
bio             | string    | not null
planet_id       | integer   | not null, foreign key

+ has_many: host_requests, guest_requests, reviews, reviews_written 
+ belongs_to: planet

## planets
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
name            | string    | not null
description     | string    | not null
image_url       | string    | not null

+ has_many: hosts

## requests
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
guest_id        | integer   | not null, foreign key
host_id         | integer   | not null, foreign key
begin_date      | date      | not null
end_date        | date      | not null
num_travelers   | integer   | not null

belongs_to: guest, host

## reviews
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
guest_id        | integer   | not null, foreign key
host_id         | integer   | not null, foreign key
body            | string    | not null
rating          | integer   | not null

belongs_to: guest, host
