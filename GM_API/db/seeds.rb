# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

tod = User.create(first_name: 'tod', password: 'password123')
greg = User.create(first_name: 'greg', password: 'password123')
f1 = Friendship.create(user_id: tod.id, friend_id: greg.id)