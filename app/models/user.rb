class User < ActiveRecord::Base
  has_many :flights, through: :reservations
end
