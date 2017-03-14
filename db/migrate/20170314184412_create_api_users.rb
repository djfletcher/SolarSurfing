class CreateApiUsers < ActiveRecord::Migration[5.0]
  def change
    create_table :users do |t|
      t.string :username, null: false
      t.string :password_digest, null: false
      t.string :session_token, null: false
      t.string :image_url, null: false
      t.text :bio, null: false
      t.integer :planet_id, null: false

      t.timestamps
    end
    add_index :users, :username, unique: true
    add_index :users, :session_token, unique: true
  end
end
