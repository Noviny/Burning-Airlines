class AddSeat < ActiveRecord::Migration
  def change
    add_column :reservations, :seat, :text
  end
end
