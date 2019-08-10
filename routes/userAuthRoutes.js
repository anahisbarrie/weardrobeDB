// Req models, passport
var db = require("../models");
var passport = require("../config/passport");

module.exports = function(app) {
    // If user has valid login, send to page or else error
    app.post("/api/login", passport.authenticate("local"), function(req,res){
        // Once authenticated - to index pg
        res.json("/index");
    });

    // Sign up new user. If sign up is successful, log user in
    app.post("/api/signup", function(req,res){
        db.User.create({
            email: req.body.email,
            password: req.body.password
        }).then(function(){
            res.redirect(307, "/api/login");
        }).catch(function(error){
            console.log(error);
            res.json(error);
        });
    });

    // Log out route
    app.get("/logout", function(req,res){
        req.logout();
        res.redirect("/");
    });

    // Retrieve user data
    app.get("/api/userData", function(req,res){
        if (!req.user) {
            // User isn't logged in
            res.json({});
        }
        else {
            res.json({
                email: req.user.email,
                id: req.user.id
            });
        }
    });
}