
module.exports = function(req,res,next){

    // Successful login, continue with site
    if (req.user){
        return next();
    }
    // Not logged in, redirect them to login modal
    return res.redirect("/");
};