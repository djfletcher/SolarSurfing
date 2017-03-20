json.extract! user, :id, :username, :bio, :image_url, :planet_id
json.reviews user.reviews.each do |review|
  json.partial! 'api/reviews/review', review: review
end
