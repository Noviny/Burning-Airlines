class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.boolean :admin
      t.string :name
      t.string :password
      t.string :email

      t.timestamps null: false
    end
  end
end
