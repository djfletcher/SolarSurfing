# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


# USERS
# =====

NAMES = ['Globxor', 'Grup-Grup', 'Floobzoid', 'Nomryls', 'Snert the Snoot', 'Esiotrot',
  'Bawbaw-8', 'Uisqp', 'Cecil-9000', 'Klawg', 'Eoj', 'Haras T\'seirg', 'Rrrrrrrrr', 'Shpazzaqe',
  'Blorg the Unconquerable', 'Kork', 'King Kang', 'Blim Blam the Klorblok', 'ET-D2',
  'Purmeot', 'Nox', 'Cloumz', 'Cecil-8080', 'Monarg', 'Blogarp', 'Dynash', 'Rakshoosa',
  'Wyrg', 'Fuiglox', 'Florqgq', 'Quixlox', 'Albaxore', 'Hortituminax', 'Xalfa']

BIOS = [
  "Hi there, friend. I like to asteroid hop as far as my bezooks dollars will take me, and then hitchhike back to the Oort Cloud and rest at home when I need a break. If you're ever in the neighborhood give me a holler!",
  "Greetings [BEEP] I am honored to make your acquaintance [BEEP] My goal is to catalogue and classify every organism in this solar system [BEEP] I am hoping to meet you soon and to add the idiosyncrasies of your species' culture to my evergrowing database [BEEP] If you arrive in the night please make sure to not step on the moonflower beds [BEEP]",
  "If you are lucky you will one day stay with my people and experience the might of the Ubuk Vanguarleeds from GloopGlop-9. I think you will find that I am kind, and willing to share the boundless power of my personality with you. You will stay with me, if you are lucky.",
  "Mxxxxxxxxxxxxxxmph! ooooooooOOOP meem -eh- eh-eh -eh- mxxxxxxxxxxxxxxmpH!",
  "Heeeeeelllooooooo. IIII''mmmm pllleeeeeeaaasssseeed tooo meeeett youuuuu. Moooosssstt ottthhherrr tttraaaaveelleeeers liiiikee toooo buuuzzzzz bbyyyy aaattttt thhheee sppeeeedd oooff liiiggghhtt buuut noootttt meeeee. IIII liiiikkke tooooo ssstooooppp annddd smmmeeeeelll ttthhheeeee spppaaacceeee dduuuussst. Seeeee yooouuuu ssoooonnnn III hhhoooopppe.",
  "I think you will find my planet very hospitable. We have eighteen moon rises per day and you can see the planet Fleebleflorp in the distance from my back patio. In my spare time I enjoy moonwalking my mumbupoo, eating at the local joints, and taking long walks on the glass sand beach."
]

PICTURES = [
  "https://res.cloudinary.com/dmgrq5xrb/image/upload/v1489774991/Hosts/host1_xxme8e.png",
  "https://res.cloudinary.com/dmgrq5xrb/image/upload/v1489950942/Hosts/host10_ikakza.png",
  "https://res.cloudinary.com/dmgrq5xrb/image/upload/v1489950941/Hosts/host11_nbxiy1.png",
  "https://res.cloudinary.com/dmgrq5xrb/image/upload/v1489878557/Hosts/host12_ag9wmf.png",
  "https://res.cloudinary.com/dmgrq5xrb/image/upload/v1489950738/Hosts/host2_mnygi6.png",
  "https://res.cloudinary.com/dmgrq5xrb/image/upload/v1489950941/Hosts/host3_e1zkxi.png",
  "https://res.cloudinary.com/dmgrq5xrb/image/upload/v1489775443/Hosts/host4_ghsfsk.png",
  "https://res.cloudinary.com/dmgrq5xrb/image/upload/v1489878572/Hosts/host5_mtxk4p.png",
  "https://res.cloudinary.com/dmgrq5xrb/image/upload/v1489878567/Hosts/host6_y0rram.png",
  "https://res.cloudinary.com/dmgrq5xrb/image/upload/v1489878556/Hosts/host7_vsp5rx.png",
  "https://res.cloudinary.com/dmgrq5xrb/image/upload/v1489878557/Hosts/host8_ckxvvw.png",
  "https://res.cloudinary.com/dmgrq5xrb/image/upload/v1489878558/Hosts/host9_qk0jr4.png"
]


# User.create(
#   username: 'dan',
#   password: 'danny',
#   image_url: '[image url goes here]',
#   bio: "Hi, I'm Dan. I suppose you could call me an earthling, though I'd rather if you didn't.",
#   planet_id: 3
# )


# dan = User.find(1)
# demo = User.find_by_username("earthling")


# PLANETS
# =======

Planet.create(
  name: 'Mercury',
  description: 'For sun lovers',
  image_url: 'https://res.cloudinary.com/dmgrq5xrb/image/upload/v1489685019/Planets/mercury1_upf51h.jpg'
)

Planet.create(
  name: 'Venus',
  description: 'The morning star',
  image_url: 'https://res.cloudinary.com/dmgrq5xrb/image/upload/v1489685021/Planets/venus1_prshti.jpg'
)

Planet.create(
  name: 'Earth',
  description: 'So much more than a pale blue dot',
  image_url: 'https://res.cloudinary.com/dmgrq5xrb/image/upload/v1489685011/Planets/earth1_sw0ygs.jpg'
)

Planet.create(
  name: 'Mars',
  description: 'Your weekend getaway',
  image_url: 'https://res.cloudinary.com/dmgrq5xrb/image/upload/v1489685009/Planets/mars1_opw2vg.jpg'
)

Planet.create(
  name: 'Jupiter',
  description: 'Big skies, ancient storms, and a Great Red Spot',
  image_url: 'https://res.cloudinary.com/dmgrq5xrb/image/upload/v1489685058/Planets/jupiter1_gowggh.png'
)

Planet.create(
  name: 'Saturn',
  description: 'The photographer\'s playground',
  image_url: 'https://res.cloudinary.com/dmgrq5xrb/image/upload/v1489685017/Planets/saturn1_gbpbsq.jpg'
)

Planet.create(
  name: 'Uranus',
  description: 'Guaranteed to lift your spirits',
  image_url: 'https://res.cloudinary.com/dmgrq5xrb/image/upload/v1489685020/Planets/uranus1_d8oibd.jpg'
)

Planet.create(
  name: 'Neptune',
  description: 'The ultimate road trip',
  image_url: 'https://res.cloudinary.com/dmgrq5xrb/image/upload/v1489685012/Planets/neptune1_r3htld.jpg'
)
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

# User.all.each do |host|
#   if host.id % 3 == 0
#     host.image_url = 'https://res.cloudinary.com/dmgrq5xrb/image/upload/v1489774988/Hosts/host3_oufvli.png'
#   elsif host.id % 2 == 0
#     host.image_url = 'https://res.cloudinary.com/dmgrq5xrb/image/upload/v1489775443/Hosts/host4_ghsfsk.png'
#   else
#     host.image_url = 'https://res.cloudinary.com/dmgrq5xrb/image/upload/v1489774988/Hosts/host2_iatwgb.png'
#   end
#   host.save!
# end


64.times do |i|
  if i < 33
    name = NAMES[i % 34]
  else
    name = NAMES[i % 34] + '-2.0'
  end

  User.create!(
    username: name,
    password: "alien1",
    bio: BIOS[i % 6],
    image_url: PICTURES.sample,
    planet_id: (i % 8) + 1
  )
end

User.create!(
  username: 'Earthling',
  password: 'earthling1',
  image_url: "https://res.cloudinary.com/dmgrq5xrb/image/upload/v1489881450/Hosts/host13.png",
  bio: "I'm an earthling. It's a great place to grow up, but I'm ready to check out some other planets.",
  planet_id: 3
)


REVIEWS = [
  "Good spot. A bit remote, but you can't beat the solitude.",
  "Dirty and gross. There were GlobberWorms under the couch...",
  "This alien rocks! Showed me all around the asteroid belt.",
  "STAY AWAY. I BARELY MADE IT OUT ALIVE.",
  "I can honestly say that this alien changed my life and opened my eyes to beauty of the universe.",
  "The planet was fun and the couch was immaculate. Highly recommend."
]

150.times do |i|
  host_id = (i % 65) + 1
  num_users = User.all.count
  possible_authors = (1..num_users).reject { |num| num == host_id }

  Review.create!(
    author_id: rand(possible_authors),
    host_id: host_id,
    body: REVIEWS.sample,
    rating: rand(1..5)
  )
end
