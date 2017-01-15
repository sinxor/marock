class LowercaseTag < ActiveRecord::Migration
  def change
    add_column :tags, :lowercase_name, :string
  end
end
