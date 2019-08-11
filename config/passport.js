// Req packages for passport
var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;

var db = require("../models");

// Setting passport to use login with email & pw
passport.use(new LocalStrategy(
    {
        usernameField: "email",
        passwordField: "password"
    },
    function(email, password, done) {
        // Will run once user attemps log in and find
        db.User.findOne({
            where: {
                email: email,
                password: password
            }
        }).then(function(dbUser){
            // If the email doesn't exist
            if (!dbUser) {
                return done(null, false, {
                    message: "Incorrect email"
                });
            }
            // If the PW is incorrect
            // else if (!dbUser.validPassword(password)){
            //     return done(null,false, {
            //         message: "Incorrect password"
            //     });
            // }

            // If both are correct
            return done(null, dbUser);
        });
    }
));

// For user session
passport.serializeUser(function(user, cb){
    cb(null, user);
}) ;

passport.deserializeUser(function(obj, cb){
    cb(null, obj);
});

module.exports = passport;