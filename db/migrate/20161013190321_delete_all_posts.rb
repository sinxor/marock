class DeleteAllPosts < ActiveRecord::Migration
  def change

      Post.destroy_all
  end
end
