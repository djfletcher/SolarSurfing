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

class Request < ApplicationRecord

  validates :guest_id, :host_id, :arrive_date, :depart_date, :num_travelers, presence: true
  validate :in_the_future, :dates_in_order, :not_overlapping

  belongs_to :guest,
    class_name: :User,
    foreign_key: :user_id,
    primary_key: :id

  belongs_to :host,
    class_name: :User,
    foreign_key: :host_id,
    primary_key: :id


  def in_the_future
    if arrive_date && depart_date
      if arrive_date <= Date.today
        errors.add("Arrival date must be in the future")
      end
    end
  end

  def dates_in_order
    if arrive_date && depart_date
      if arrive_date > depart_date
        errors.add("Arrival date can't be after departure date")
      end
    end
  end


  def not_overlapping
    if arrive_date && depart_date
      host.requests_received.each do |request|
        booked_arrive = request.arrive_date
        booked_depart = request.depart_date
        if arrive_date.between?(booked_arrive, booked_depart - 1)
          errors.add("This spot has already been reserved from #{booked_arrive} to #{booked_depart}")
        elsif depart_date.between?(booked_arrive + 1, booked_depart)
          errors.add("This spot has already been reserved from #{booked_arrive} to #{booked_depart}")
        elsif booked_arrive.between?(arrive_date, depart_date - 1)
          errors.add("This spot has already been reserved from #{booked_arrive} to #{booked_depart}")
        end
      end
    end
  end


end
