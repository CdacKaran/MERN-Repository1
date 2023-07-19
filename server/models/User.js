const mongoose = require('mongoose')
const UserSchema = new mongoose.Schema({
    id: Number,
    name: String,
    image: String,
    category: String,
    label: String,
    price: Number,
    description: String
})

const UserModel = mongoose.model("prices",UserSchema)
module.exports = UserModel