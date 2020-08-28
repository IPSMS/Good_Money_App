class User < ApplicationRecord
    has_secure_password

    validates :username, uniqueness: { case_sensitive: false }
    validates :password, presence: true, confirmation: true, length: { minimum: 6 }
    validates :password_confirmation, presence: true


    has_many :stats
    has_many :action_infos

    # self referencing relationship
    has_many :followers, foreign_key: :follower_id , class_name: "Friendship"
    has_many :followed, through: :followers
    has_many :followed, foreign_key: :followed_id, class_name: "Friendship"
    has_many :followers, through: :followed
end
