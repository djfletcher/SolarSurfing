# == Schema Information
#
# Table name: planets
#
#  id          :integer          not null, primary key
#  name        :string           not null
#  description :string           not null
#  image_url   :string           not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Planet < ApplicationRecord

  validates :name, :description, :image_url, presence: true
  validates :name, uniqueness: true

  has_many :hosts,
    class_name: :User,
    foreign_key: :planet_id,
    primary_key: :id

end
