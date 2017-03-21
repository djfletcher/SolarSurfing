# == Schema Information
#
# Table name: reviews
#
#  id         :integer          not null, primary key
#  author_id  :integer          not null
#  host_id    :integer          not null
#  body       :string           not null
#  rating     :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Review < ApplicationRecord

  validates :author_id, :host_id, :body, :rating, presence: true

  belongs_to :host,
    class_name: :User,
    foreign_key: :host_id,
    primary_key: :id

  belongs_to :author,
    class_name: :User,
    foreign_key: :author_id,
    primary_key: :id

  def author_username
    self.author.username
  end

  def author_image_url
    self.author.image_url
  end

  def author_planet_id
    self.author.planet_id
  end

end
