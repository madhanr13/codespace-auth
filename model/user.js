const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    firstname: {
        type:String,
        default: null
    },
    lastname: {
        type:String,
        default: null
    },
    email: {
        type:String,
        unique: true
    },
    password: {
        type:String,
    },
    token: {
        type:String,
        default: null
    },
})
const User = mongoose.model("User", userSchema)
module.exports = User