const mongoose = require('mongoose');
const bcrypt = require("bcrypt");//use encryption

//User Schema
const UserSchema = mongoose.Schema({
    username:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password:
    {
        type: String,
        rerquired: true
    }
});

//export the model
const User = module.exports = mongoose.model('User',UserSchema);

