# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# User.create(
#   username: 'dan',
#   password: 'danny',
#   image_url: '[image url goes here]',
#   bio: "Hi, I'm Dan. I suppose you could call me an earthling, though I'd rather if you didn't.",
#   planet_id: 3
# )

# User.create(
#   username: 'Earthling',
#   password: 'earthling1',
#   image_url: '[earthling]',
#   bio: "I'm an earthling. It's a great place to grow up, but I'm ready to check out some other planets.",
#   planet_id: 3
# )


dan = User.find(1)
demo = User.find_by_username("earthling")
