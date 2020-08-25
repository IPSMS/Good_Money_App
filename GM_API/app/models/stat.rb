class Stat < ApplicationRecord
  belongs_to :user
  has_many :action_infos
end
