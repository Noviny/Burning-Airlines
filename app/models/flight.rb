class Flight < ActiveRecord::Base
  has_many :users, through: :reservations
end
