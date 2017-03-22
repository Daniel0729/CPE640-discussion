const mongoose = require('mongoose');
const bcrypt = require("bcrypt");//use encryption

//User Schema
const DiscussionSchema = mongoose.Schema({
    // create_by:[{//should be a User
    //     
    // }],
    topic:
    {
        type: String,
        required: true
    },
    content:
    {
        type: String,
        rerquired: true
    },
    // comment://this must be can iteration
    // {
    //     discussion:
    // }

});

//export the model
const Discussion = module.exports = mongoose.model('Discussion',DiscussionSchema);