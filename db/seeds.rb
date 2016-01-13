# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.destroy_all
u1 = User.create :name => 'Admin', :email => 'admin@gmail.com', :password => 'chicken'
u2 = User.create :name => 'Kiah', :email => 'kiah@gmail.com', :password => 'chicken'
u3 = User.create :name => 'Angie', :email => 'angie@gmail.com', :password => 'chicken'
u4 = User.create :name => 'Ben', :email => 'ben@gmail.com', :password => 'chicken'

Airplane.destroy_all
a1 = Airplane.create :name => '747', :rows => 20, :columns => 6
a2 = Airplane.create :name => '756', :rows => 18, :columns => 8
a3 = Airplane.create :name => '777', :rows => 22, :columns => 6
a4 = Airplane.create :name => '380', :rows => 24, :columns => 5

Flight.destroy_all
f1 = Flight.create :flight_no => 'AA100', :origin => 'MEL', :destination => 'SYD', :date => '01/01/2016 17:00'
f2 = Flight.create :flight_no => 'QF110', :origin => 'BNE', :destination => 'MEL', :date => '02/01/2016 08:00'
f3 = Flight.create :flight_no => 'AF100', :origin => 'SYD', :destination => 'BNE', :date => '01/01/2016 17:00'
f4 = Flight.create :flight_no => 'QY111', :origin => 'PER', :destination => 'MEL', :date => '01/01/2016 15:00'
f5 = Flight.create :flight_no => 'RY123', :origin => 'SYD', :destination => 'PER', :date => '02/01/2016 13:00'

# Associates Airplanes with Flights
a1.flights << f1
a2.flights << f2 << f5
a3.flights << f3
a4.flights << f4

Reservation.destroy_all
r1 = Reservation.create :user_id => u4.id, :flight_id => f1.id
r2 = Reservation.create :user_id => u2.id, :flight_id => f2.id
r3 = Reservation.create :user_id => u4.id, :flight_id => f2.id

