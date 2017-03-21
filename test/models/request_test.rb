# == Schema Information
#
# Table name: requests
#
#  id            :integer          not null, primary key
#  guest_id      :integer          not null
#  host_id       :integer          not null
#  arrive_date   :date             not null
#  depart_date   :date             not null
#  num_travelers :integer          not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

require 'test_helper'

class RequestTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
