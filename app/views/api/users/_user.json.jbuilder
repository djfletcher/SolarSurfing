json.extract! user, :id, :username, :bio, :image_url, :planet_id
json.reviews user.reviews.each do |review|
  json.partial! 'api/reviews/review.json.jbuilder', review: review
end
json.requests_received user.requests_received.each do |request|
  json.partial! 'api/requests/request.json.jbuilder', request: request
end
json.requests_made user.requests_made.each do |request|
  json.partial! 'api/requests/request.json.jbuilder', request: request
end
