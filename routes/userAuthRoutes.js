// Req models, passport
var db = require("../models");
var passport = require("../config/passport");
var isAuthenticated = require("../config/middleware/userAuthenticated");

module.exports = function(app) {
    // If user has valid login, send to page or else error
    app.post("/api/login", passport.authenticate("local"), function(req,res){
        // Once authenticated - to index pg
        res.render("index");
        // res.json("/index");
    });

    // Sign up new user. If sign up is successful, log user in
    app.post("/api/signup", function(req,res){
        var userInfo = JSON.stringify(req.body);
        userInfo = JSON.parse(userInfo);
        console.log(userInfo.email);
        console.log(userInfo.password);
        db.User.create(
            userInfo
        ).then(function(){
            res.render("index");
            // res.redirect(307, "/index");
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
    app.get("/api/userData", isAuthenticated, function(req,res){
        res.json({
            email: req.user.email,
            id: req.user.id
        });
    });
}