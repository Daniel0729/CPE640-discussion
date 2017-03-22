const mongoose = require('mongoose');
const bcrypt = require("bcrypt");//use encryption

//User Schema
const ProjectSchema = mongoose.Schema({
    // teamnumber:[{//team number schema
    //     User:User._id
    // }],
    project_name:
    {
        type: String,
        required: true
    },
    description:
    {
        type: String,
        rerquired: true
    },
    start:
    {
        type: Data,
        required: true
    },
    end:
    {
        type: Data,
        required: true
    }

});

//export the model
const Project = module.exports = mongoose.model('Project',ProjectSchema);