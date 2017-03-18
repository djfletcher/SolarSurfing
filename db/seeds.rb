# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


# USERS
# =====

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


# dan = User.find(1)
# demo = User.find_by_username("earthling")


# PLANETS
# =======

# Planet.create(
#   name: 'Mercury',
#   description: 'For sun lovers',
#   image_url: 'https://res.cloudinary.com/dmgrq5xrb/image/upload/v1489685019/Planets/mercury1_upf51h.jpg'
# )
#
# Planet.create(
#   name: 'Venus',
#   description: 'The morning star',
#   image_url: 'https://res.cloudinary.com/dmgrq5xrb/image/upload/v1489685021/Planets/venus1_prshti.jpg'
# )
#
# Planet.create(
#   name: 'Earth',
#   description: 'So much more than a pale blue dot',
#   image_url: 'https://res.cloudinary.com/dmgrq5xrb/image/upload/v1489685011/Planets/earth1_sw0ygs.jpg'
# )
#
# Planet.create(
#   name: 'Mars',
#   description: 'Your weekend getaway',
#   image_url: 'https://res.cloudinary.com/dmgrq5xrb/image/upload/v1489685009/Planets/mars1_opw2vg.jpg'
# )
#
# Planet.create(
#   name: 'Jupiter',
#   description: 'Big skies, ancient storms, and a Great Red Spot',
#   image_url: 'https://res.cloudinary.com/dmgrq5xrb/image/upload/v1489685058/Planets/jupiter1_gowggh.png'
# )
#
# Planet.create(
#   name: 'Saturn',
#   description: 'The photographers' playground',
#   image_url: 'https://res.cloudinary.com/dmgrq5xrb/image/upload/v1489685017/Planets/saturn1_gbpbsq.jpg'
# )
#
# Planet.create(
#   name: 'Uranus',
#   description: 'Guaranteed to lift your spirits',
#   image_url: 'https://res.cloudinary.com/dmgrq5xrb/image/upload/v1489685020/Planets/uranus1_d8oibd.jpg'
# )
#
# Planet.create(
#   name: 'Neptune',
#   description: 'The ultimate road trip',
#   image_url: 'https://res.cloudinary.com/dmgrq5xrb/image/upload/v1489685012/Planets/neptune1_r3htld.jpg'
# )
#
# mercury = Planet.find(1)
# venus = Planet.find(2)
# earth = Planet.find(3)
# mars = Planet.find(4)
# jupiter = Planet.find(5)
# saturn = Planet.find(6)
# uranus = Planet.find(7)
# neptune = Planet.find(8)
#
#
# mercury.update(
#   description: 'For sun lovers'
# )
#
# venus.update(
#   description: 'The morning star'
# )
#
# earth.update(
#   description: 'So much more than a pale blue dot'
# )
#
# mars.update(
#   description: 'Your weekend getaway'
# )
#
# jupiter.update(
#   description: 'Big skies, ancient storms, and a Great Red Spot'
# )
#
# saturn.update(
#   description: 'The photographers playground'
# )
#
# uranus.update(
#   description: 'Guaranteed to lift your spirits'
# )
#
# neptune.update(
#   description: 'The ultimate road trip'
# )

User.all.each do |host|
  if host.id % 3 == 0
    host.image_url = 'https://res.cloudinary.com/dmgrq5xrb/image/upload/v1489774988/Hosts/host3_oufvli.png'
  elsif host.id % 2 == 0
    host.image_url = 'https://res.cloudinary.com/dmgrq5xrb/image/upload/v1489775443/Hosts/host4_ghsfsk.png'
  else
    host.image_url = 'https://res.cloudinary.com/dmgrq5xrb/image/upload/v1489774988/Hosts/host2_iatwgb.png'
  end
  host.save!
end
