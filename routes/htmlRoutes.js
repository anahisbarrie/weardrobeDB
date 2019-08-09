var db = require("../models");

module.exports = function (app) {
  app.get('/', function (req, res) {
    res.render('home');
  });
  
  // Load index page
  app.get("/index", function (req, res) {
    db.Example.findAll({}).then(function (dbExamples) {
      res.render("index", {
        msg: "Welcome!",
        examples: dbExamples
      });
    });
  });

  // Load example page and pass in an example by id
  app.get("/example/:id", function (req, res) {
    db.Example.findOne({
      where: {
        id: req.params.id
      }
    }).then(function (dbExample) {
      res.render("example", {
        example: dbExample
      });
    });
  });

  //Load statistics page with all the charts and current information for the user
  app.get("/statistics", function (req, res) {
      res.render("stats")
  })

  //This is the get route in order to get all the data. The way this works is that when we hit the /statistics route, the stats handlebars file is loaded. This file is linked to the main.handlebars file, at the bottom of the file there is a script link to my statistics.js file. There is a function in the statistics.js there that calls a get route which then circles back to the route below and gets the data from the DB.
  app.get("/api/statistics", function (req, res) {
    db.Clothes.findAll({}).then(function (dbClothes) {
      res.json(dbClothes)
    })
  })

  app.get("/calendar", function (req, res) {
    res.render("calendar")
  });

  app.get("/inspo", function (req, res) {
    res.render("inspo")
  });

  // Render 404 page for any unmatched routes
  app.get("*", function (req, res) {
    res.render("404");
  });
};
