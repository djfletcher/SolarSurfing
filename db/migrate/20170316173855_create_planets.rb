class CreatePlanets < ActiveRecord::Migration[5.0]
  def change
    create_table :planets do |t|
      t.string :name, null: false
      t.string :description, null: false
      t.string :image_url, null: false

      t.timestamps
    end
  end
end
