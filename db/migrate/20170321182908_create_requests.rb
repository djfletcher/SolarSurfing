class CreateRequests < ActiveRecord::Migration[5.0]
  def change
    create_table :requests do |t|
      t.integer :guest_id, null: false
      t.integer :host_id, null: false
      t.date :begin_date, null: false
      t.date :end_date, null: false
      t.integer :num_travelers, null: false

      t.timestamps
    end
  end
end
