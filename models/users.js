const mongoose = require("mongoose")
const Schema = mongoose.Schema

const userSchema = new Schema({

    username:{
        type: String,
        required: true,
    },
    password:{
        type: String,
        required: true,
    },
    fullname:{
        type: String,
        required: true,
    },
    usertype:{
        type: String,
        required: true,
    },
    gender:{
        type: String,
        required: true,
    },
    dateOfBirth:{
        type: String,
        required: true,
    },
    address: {
        type: String, 
        required: true,
    },
    contactNumber:{
        type: String,
        required: true,
    },
    emailAddress:{
        type: String,
        required: true,
    },
    hashedKey:{
        type: String,
        required: true,
    },

    bio:{
        type: String,
        required: true,
    }

}, {timestamps: true})

const Users = mongoose.model('Users', userSchema)

module.exports = Users