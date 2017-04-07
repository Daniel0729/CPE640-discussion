var localStrategy = require('passport-local').Strategy;
var User = require('../models/user');

module.exports = function(passport){
    passport.serializeUser(function(user,done){
        done(null,user.id)
    });

    passport.deserializeUser(function(id,done){
        User.findById(id,function(err,user){
            done(err,user);
        });
    });

    passport.use('local-signup',new localStrategy({
        usernameField: 'username',
        passwordField: 'password',
        passReqToCallback: true
    },
    function(req , username, password, email,done){
        process.nextTick(function(){
            User.find({'username':username}, function(err,user)
            {
                if(err)
                    return done(err);
                if(user)
                {
                    return done(null,false,console.log('username is already token'));
                }
                else{
                    new newUser = new User();
                    newUser.username = username;
                    newUser.passport = passport;
                    newUser.email = email;

                    newUser.save(function(err){
                        if(err)
                            throw err;
                        return done(null,newUser);
                    })
                }
            })
        });
    }
    ))
}