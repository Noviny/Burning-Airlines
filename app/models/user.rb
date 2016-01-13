class User < ActiveRecord::Base
  has_many :flights, through: :reservations
  has_secure_password
end

