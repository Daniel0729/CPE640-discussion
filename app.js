const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const path = require("path");


//database mongodb
mongoose.connect('mongodb://localhost/Discussion');
// testing
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("connect to mongodb"); 
});

const app = express();
const users = require('./routes/users');
const project = require('./routes/project');
const discussion = require('./routes/discussion');



//app.use deal with the middleware
// body parser Middleware
app.use(bodyParser.json());

//we must define bodyparser middleware before routes if we want to use req.body
app.use('/user',users);
app.use('/project',project);
app.use('/discussion',discussion);
//set static path client-side stuff
app.use(express.static(path.join(__dirname,'public')));

//Set views engine also the client-side stuff HTML
// app.set('views',path.join(__dirname,'views'));
// app.set('views engine','ejs');


app.listen(3000,(err) => {
    if(err){
        console.log(err);
    }
    else
    {
        console.log("server running on port 3000");
    }
    
});