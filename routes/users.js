const User = require('../models/user');

module.exports = function(app,passport)
{
    
	app.get('/signup', function(req, res){
		res.render('signup.ejs', { message: req.flash('signupMessage') });
	});
    app.post('/register',passport.authenticate('local-signup',{
        successRedreict: '/',
        failureRedreict : '/register',
        failureFlash: true
    }));
    app.post('/login',passport.authenticate('local-login'),{
        successRedreict:'/',
        failureRedreict:'/login',
        failureFlash:true
    });
    app.get('/',isLoggedIn,function(req,res){
        res.render('',{user:req.user});
    });

    app.get('/logout', function(req, res){
    req.logout();
    res.redirect('/');
	});
}

function isLoggedIn(req,res,next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect('/login');
}

// //Register
// router.get('/vaild',(req,res,next)=>{
//     res.send("Vaild");
// });
// // router.post('/register',(req,res,next) => {
// //     let newUser = new User({
// //         username: req.body.username,
// //         email: req.body.email,
// //         password: req.body.password
// //     });
// //     // if User already exist?
// //     User.addUser(newUser,(err,user)=>{
// //         if(err)
// //         {
// //             res.json({sucess: false, msg:err});
// //         }
// //         else
// //         {
// //             res.json({success: true, msg:"User register Sucessfully"});
// //         }
// //     });
// // });

// module.exports = router