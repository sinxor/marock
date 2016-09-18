class AddIndexLikes < ActiveRecord::Migration
  def change
    add_index :likes, [:likeable_type, :likeable_id]
    add_index :likes, :user_id
  end
end
