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
//utitly function
module.exports.addUser = function(newUser,callback)
{
    newUser.save(callback);
}
userSchema.methods.generateHash = function(password){
	return bcrypt.hashSync(password, bcrypt.genSaltSync(9));
}

userSchema.methods.validPassword = function(password){
	return bcrypt.compareSync(password, this.local.password);
}

//export the model
const User = module.exports = mongoose.model('User',UserSchema);
