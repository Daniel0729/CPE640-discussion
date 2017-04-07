const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const LocalStrategy = require('passport-local').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const flash = require('connect-flash');
const path = require("path");
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const session = require('express-session');


//database mongodb
mongoose.connect('mongodb://localhost/Discussion');
require('./config/passport')(passport);
// testing
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("connect to mongodb"); 
});

const users = require('./routes/users');
const project = require('./routes/project');
const discussion = require('./routes/discussion');

const app = express();
//morgan middleware: HTTP request logger middleware. I think it like server-client monitor
app.use(morgan('dev'));

//what is cookie: Cookies are created when you use your browser to visit a website that uses cookies to keep track of your movements within the site, help you resume where you left off, remember your registered login, theme selection, preferences, and other customization functions
//Parse cookie header and populate req.cookies with an object keyed by cookie names.

app.use(cookieParser());
app.use(bodyParser());
app.use(session({secret:"GODisgood"}));

//pasport Middleware
app.use(passport.initialize());
app.use(passport.session());


//app.use deal with the middleware
// body parser Middleware
app.use(bodyParser.json());


//we must define bodyparser middleware before routes if we want to use req.body
// app.use('/',function(req,res){
//     console.log('Cookies:',req.cookies);
//     console.log("+++++++++++");
//     console.log(session);
// });
app.use('/user',users);
app.use('/project',project);
app.use('/discussion',discussion);
//set static path client-side stuff
app.use(express.static(path.join(__dirname,'public')));

//Set views engine also the client-side stuff HTML
// app.set('views',path.join(__dirname,'views'));
// app.set('views engine','ejs');
require('./routes/users')(app,passport);
app.listen(3000,(err) => {
    if(err){
        console.log(err);
    }
    else
    {
        console.log("server running on port 3000");
    }
    
});