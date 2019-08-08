var db = require("../models");

module.exports = function (app) {
  // Load index page
  app.get("/", function (req, res) {
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
    db.Clothes.findAll({}).then(function (dbClothes) {
      console.log(dbClothes.example)
      res.render("stats", {
        example: dbClothes
      })
      console.log(`DB Clothes: `, dbClothes)
    })
  })

  app.get("/api/statistics", function (req, res) {
    db.Clothes.findAll({}).then(function (dbClothes) {
      res.json(dbClothes)
    })
  })


  app.get("/calendar", function (req, res) {
    res.render("calendar")
  })

  // Render 404 page for any unmatched routes
  app.get("*", function (req, res) {
    res.render("404");
  });
};
