class AddMissing < ActiveRecord::Migration
  def change
    add_column :users, :password_digest, :text
    add_column :flights, :airplane_id, :text
  end
end
