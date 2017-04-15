const LocalStrategy = require('passport-local').Strategy;
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

    passport.use('local-signup',new LocalStrategy({
        usernameField: 'username',
        passwordField: 'password',
        passReqToCallback: true
    },
    function(req , username, password,done){
        //nodejs process.nextTick 
        process.nextTick(function(){
            User.find({'username':username}, function(err,user)
            {
                if(err)
                    return done(err);
                if(user)
                {
                    return done(null,false,req.flash('signupMessage','username is already token'));
                }
                else{
                    var newUser = new User();
                    newUser.username = username;
                    newUser.passport = newUser.generateHash(password);
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
    ));

    passport.use('local-login', new LocalStrategy({
        usernameField: 'username',
        passportField: 'password',
        passReqToCallback: true
    },
    function(req,email,password,done){
        process.nextTick(function(){
            User.findOne({'username':username},function(err,user){
                if(err)
                    return done(err);
                if(!user && !user.validPassword(password))
                {
                    return done(null,false,req.flash('loginMessage','Invalid password or Username'));
                }
                else{
                    done(null,user);
                }
            })
        })
    }
    ))
}