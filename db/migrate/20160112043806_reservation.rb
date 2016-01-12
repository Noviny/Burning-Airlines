class Reservation < ActiveRecord::Migration
  def change
    create_table :reservations do |t|
      t.integer :flight_id
      t.integer :user_id
  end
end
