class User < ApplicationRecord
    has_secure_password

    has_many :stats
    has_many :action_infos

    # self referencing relationship
    has_many :friendships
    has_many :friends, through: :friendships
end
