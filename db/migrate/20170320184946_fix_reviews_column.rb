class FixReviewsColumn < ActiveRecord::Migration[5.0]
  def change
    rename_column :reviews, :guest_id, :author_id
  end
end
