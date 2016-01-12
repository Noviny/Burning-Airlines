class CreateFlights < ActiveRecord::Migration
  def change
    create_table :flights do |t|
      t.string :flight_no
      t.string :origin
      t.string :destination
      t.string :date

      t.timestamps null: false
    end
  end
end
