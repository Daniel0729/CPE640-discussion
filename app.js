const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const path = require("path");

//database mongodb
mongoose.connect('mongodb://localhost/Discussion');
//testing
// var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function() {
//   console.log("we're connected!"); 
// });

const app = express();
//app.use deal with the middleware
// body parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

//set static path client-side stuff
app.use(express.static(path.join(__dirname,'public')));



app.get('/',function(req,res,next) {
    
});

app.post('/user/add',function(req,res){
    req.body.first
});

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