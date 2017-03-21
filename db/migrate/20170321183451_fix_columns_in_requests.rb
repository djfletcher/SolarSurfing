class FixColumnsInRequests < ActiveRecord::Migration[5.0]
  def change
    rename_column :requests, :begin_date, :arrive_date
    rename_column :requests, :end_date, :depart_date
  end
end
